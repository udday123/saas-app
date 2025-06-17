"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { subjects } from "@/constants"
import { createCompanion } from "@/lib/actions/companion.actions"
import { useRouter } from "next/navigation"


const formSchema = z.object(
    {
        name:z.string().min(2,{message:'Companion is required'}),
        subject:z.string().min(2,{message:'subject is required'}),
        topic:z.string().min(2,{message:'topic is required'}),
        voice:z.string().min(2,{message:'voice is required'}),
        style:z.string().min(2,{message:'style is required'}),
        duration:z.coerce.number().min(1,{message:'Duration is required'})
    }
)

const CompanionForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name:'',
        subject:'',
        topic:'',
        voice:'',
        style:'',
        duration:15,
    },
  })
 
  // 2. Define a submit handler.
    const router = useRouter()

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      const companion = await createCompanion(values);
      
      if (companion) {
        router.push(`/companions/${companion.id}`);
      }
      else{
        console.log('Failed to create a companion');
        router.push('/');
      }
    };


  return (
    <div className="h-160 ">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name</FormLabel>
              <FormControl>
                <Input className="input" placeholder="Enter the Companion Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Select 
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
                >
                <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select the subject" />
                </SelectTrigger>
                <SelectContent>
                    {subjects.map((subject)=>(
                        <SelectItem value={subject}
                        key={subject}
                        className="capitalize" >
                        {subject}
                         </SelectItem>
                    ))}
                </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What Should the Companion help with</FormLabel>
              <FormControl>
                <textarea className="input" placeholder="Ex. Derivates & integrals" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

          <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>
              <FormControl>
                <Select 
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
                >
                <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select the Voice" />
                </SelectTrigger>
                <SelectContent>
                    
                        <SelectItem value="male">
                            Male
                        </SelectItem>
                        <SelectItem value="female">
                            Female
                        </SelectItem>
                </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl>
                <Select 
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
                >
                <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select the Style" />
                </SelectTrigger>
                <SelectContent>
                    
                        <SelectItem value="formal">
                            Formal
                        </SelectItem>
                        <SelectItem value="Casual">
                            Casual
                        </SelectItem>
                </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration inminutes</FormLabel>
              <FormControl>
                <Input type="number" placeholder="15" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full cursor-crosshair">Build Your Companion</Button>
      </form>
    </Form>
    </div>
    
  )
}

export default CompanionForm