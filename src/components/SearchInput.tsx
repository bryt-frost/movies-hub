'use client';

import { useRouter } from 'next/navigation';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';

const formSchema = z.object({
  search: z.string().min(2).max(30),
});
type FormData = z.infer<typeof formSchema>;

const SearchInput = () => {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '', // Note: use 'search' instead of 'input'
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push(`/search/${values.search}`);
    form.reset();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='text-black space-y-1'>
        <FormField
          control={form.control}
          name='search'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='dark:text-white dark:bg-[#1f1f1f]'
                  placeholder='search'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
export default SearchInput;
