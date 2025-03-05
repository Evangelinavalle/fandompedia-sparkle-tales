
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, ThumbsUp, MoreHorizontal } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Sample data for the forum posts
const initialPosts = [
  {
    id: '1',
    author: 'AnimeGuru',
    avatar: 'https://source.unsplash.com/random/100x100/?avatar',
    title: 'Who is your favorite character from Naruto?',
    content: 'I personally love Kakashi because of his mysterious past and cool abilities. What about you guys?',
    timestamp: '2 hours ago',
    likes: 15,
    comments: [
      {
        id: '1-1',
        author: 'NarutoFan123',
        avatar: 'https://source.unsplash.com/random/100x100/?profile',
        content: 'Itachi Uchiha is my favorite! His story is so complex and tragic.',
        timestamp: '1 hour ago',
        likes: 8
      },
      {
        id: '1-2',
        author: 'ShinobiWorld',
        avatar: 'https://source.unsplash.com/random/100x100/?anime',
        content: 'I like Shikamaru. His strategic mind and laid-back attitude make him relatable.',
        timestamp: '30 minutes ago',
        likes: 5
      }
    ]
  },
  {
    id: '2',
    author: 'DisneyLover',
    avatar: 'https://source.unsplash.com/random/100x100/?cartoon',
    title: 'Most underrated Disney character?',
    content: 'I think Kronk from Emperor\'s New Groove doesn\'t get enough love. He\'s hilarious!',
    timestamp: '5 hours ago',
    likes: 24,
    comments: [
      {
        id: '2-1',
        author: 'PrincessFan',
        avatar: 'https://source.unsplash.com/random/100x100/?princess',
        content: 'I agree! Also, I think Megara from Hercules is pretty underrated too.',
        timestamp: '4 hours ago',
        likes: 12
      }
    ]
  }
];

const Forum = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newComments, setNewComments] = useState<Record<string, string>>({});
  
  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) return;
    
    const newPost = {
      id: Date.now().toString(),
      author: 'Guest',
      avatar: 'https://source.unsplash.com/random/100x100/?user',
      title: newPostTitle,
      content: newPostContent,
      timestamp: 'Just now',
      likes: 0,
      comments: []
    };
    
    setPosts([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostContent('');
  };
  
  const handleCommentSubmit = (postId: string) => {
    if (!newComments[postId]?.trim()) return;
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: `${postId}-${post.comments.length + 1}`,
              author: 'Guest',
              avatar: 'https://source.unsplash.com/random/100x100/?user',
              content: newComments[postId],
              timestamp: 'Just now',
              likes: 0
            }
          ]
        };
      }
      return post;
    }));
    
    // Clear the comment input
    setNewComments({ ...newComments, [postId]: '' });
  };
  
  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };
  
  const handleCommentLike = (postId: string, commentId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments.map(comment => 
            comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
          )
        };
      }
      return post;
    }));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Community Forum</h1>
            <p className="text-muted-foreground">
              Join discussions about your favorite characters and series with fellow fans.
            </p>
          </motion.div>
          
          {/* Create new post */}
          <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Create a New Topic
              </h2>
              
              <form onSubmit={handlePostSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    placeholder="Topic title"
                    className="w-full p-3 border rounded-md bg-background/50"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full p-3 border rounded-md bg-background/50 min-h-[120px]"
                    required
                  />
                </div>
                
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Post Topic
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
          
          {/* Posts list */}
          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                className="glass-card rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {/* Post header */}
                <div className="p-6 border-b">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={post.avatar} 
                        alt={post.author} 
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{post.author}</h3>
                        <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                      </div>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground">{post.content}</p>
                  
                  <div className="mt-4 flex items-center gap-4">
                    <button 
                      className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => handleLike(post.id)}
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </button>
                    <span className="text-muted-foreground">
                      {post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}
                    </span>
                  </div>
                </div>
                
                {/* Comments section */}
                <div className="p-6 bg-secondary/20">
                  <h3 className="font-medium mb-4">Comments</h3>
                  
                  <div className="space-y-4 mb-6">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="border-b border-border/50 pb-4 last:border-0">
                        <div className="flex items-start gap-3 mb-2">
                          <img 
                            src={comment.avatar} 
                            alt={comment.author} 
                            className="h-8 w-8 rounded-full object-cover mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">{comment.author}</h4>
                              <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                            </div>
                            <p className="text-sm mt-1">{comment.content}</p>
                            <button 
                              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-2"
                              onClick={() => handleCommentLike(post.id, comment.id)}
                            >
                              <ThumbsUp className="h-3 w-3" />
                              <span>{comment.likes}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Add comment */}
                  <div className="flex gap-3">
                    <img 
                      src="https://source.unsplash.com/random/100x100/?user" 
                      alt="Guest" 
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="flex-1 flex">
                      <input
                        type="text"
                        value={newComments[post.id] || ''}
                        onChange={(e) => setNewComments({ ...newComments, [post.id]: e.target.value })}
                        placeholder="Add a comment..."
                        className="flex-1 p-2 text-sm border rounded-l-md bg-background/50"
                      />
                      <button
                        onClick={() => handleCommentSubmit(post.id)}
                        className="bg-primary text-primary-foreground px-3 rounded-r-md hover:bg-primary/90 transition-colors"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Forum;
