import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { mockBlogPosts } from '@/lib/mock-data';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto max-w-6xl py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Community Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discussions and insights on smart contracts, blockchain technology, and the future of web3.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {mockBlogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <Card className="h-full flex flex-col transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={post.image.imageHint}
                    />
                  </div>
                </CardHeader>
                <div className="flex flex-col flex-grow">
                  <CardContent className="pt-6">
                    <CardTitle className="font-headline text-2xl leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mt-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-between items-center text-sm text-muted-foreground">
                    <span>{post.author} &middot; {post.date}</span>
                    <div className="flex items-center text-primary group-hover:text-accent-foreground font-medium">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
