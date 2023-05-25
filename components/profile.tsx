"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/react-hook-form/form"
import exp from "constants"
const formSchema = z.object({
    url: z.string().min(2, {
        message: "Url must be at least 2 characters.",
    }).url({ message: "Must be a valid url" }),
    name: z.string().min(2, {
        message: "Company name must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Must be a valid email" }),
})

export function ProfileForm({ onSubmit }) {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    })

    function handleFormSubmit(data) {
        // Invoke the onSubmit callback with the form data
        onSubmit(data);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Website</FormLabel>
                            <FormControl>
                                <Input placeholder="example.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your companies website link.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Example company" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@example.com" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full" type="submit">Generate</Button>
            </form>
        </Form>
    )
}