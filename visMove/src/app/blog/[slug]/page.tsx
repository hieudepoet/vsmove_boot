import Image from 'next/image';
import { notFound } from 'next/navigation';
import { mockBlogPosts, type BlogPost } from '@/lib/mock-data';
import { Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  return mockBlogPosts.map(post => ({
    slug: post.slug,
  }));
}

function getPostBySlug(slug: string): BlogPost | undefined {
  return mockBlogPosts.find(post => post.slug === slug);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1">
      <div className="container mx-auto max-w-3xl py-8 md:py-12">
        <article className="prose dark:prose-invert max-w-none">
          <div className="space-y-4 not-prose">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">{post.title}</h1>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video my-8 overflow-hidden rounded-lg border">
            <Image
              src={post.image.imageUrl}
              alt={post.image.description}
              fill
              className="object-cover"
              data-ai-hint={post.image.imageHint}
              priority
            />
          </div>
          
          <div
            className="prose dark:prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-headings:font-headline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </article>
      </div>
    </main>
  );
}
