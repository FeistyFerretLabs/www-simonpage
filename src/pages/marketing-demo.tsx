import { Button } from "@/components/ui/button";

/**
 * Simon Page Business Website - Homepage
 * 
 * Dark aesthetic. Miles Beckler-style conversational copy.
 * Written like a letter, not a landing page.
 */

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[var(--bg-primary)]/80 backdrop-blur-sm">
        <div className="section-content flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Simon Page" className="h-8 w-8" />
            <span className="font-semibold text-lg">Simon Page</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--text-secondary)]">
            <a href="#start-here" className="hover:text-white transition">Start Here</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#resources" className="hover:text-white transition">Free Resources</a>
            <a href="https://youtube.com" target="_blank" className="hover:text-white transition">YouTube</a>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Subscribe
          </Button>
        </div>
      </header>

      {/* Hero - Conversational */}
      <section className="pt-32 pb-20 px-6">
        <div className="section-content max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            AI keeps giving you generic slop.
            <br />
            <span className="text-[var(--brand-blue-dim)]">I'll show you how to fix that.</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-4">
            You've tried ChatGPT. You've copied all those "magic prompts" from YouTube. 
            But everything it writes still sounds... well, like AI wrote it.
          </p>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
            I'm Simon Page. I teach creators and entrepreneurs how to use AI 
            so they get the results they actually want... without the frustrating back-and-forth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dim)]">
              Get the Free Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white/20">
              Watch on YouTube
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem - Letter style */}
      <section className="section-frame py-20 bg-[var(--bg-secondary)]">
        <div className="section-content px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              Here's the thing no one tells you.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              The problem isn't the AI. It's not the prompt you copied. 
              And it's definitely not that you're "bad at this."
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              The problem is <span className="text-white">context</span>.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Most people use AI like a vending machine... insert prompt, get result. 
              But AI doesn't know your voice. It doesn't know your audience. 
              It doesn't know what "good" looks like for you.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              So it gives you the same generic slop it gives everyone else.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I'll show you how to fix that... permanently.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach - Story-driven */}
      <section className="section-frame py-20">
        <div className="section-content px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              What I teach is different.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              I don't do prompt hacks. I don't sell "AI magic" courses. And I definitely don't promise that AI will build your business while you sleep.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              What I do is show you <em>why</em> AI gives you what it gives you... and how to fix it properly.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              I break down:
            </p>
            <ul className="text-lg text-[var(--text-secondary)] leading-relaxed space-y-3 mb-6 pl-6">
              <li className="relative before:content-['→'] before:absolute before:-left-6 before:text-[var(--brand-blue-dim)]">
                Why the same prompt gives you different results (and how to make it consistent)
              </li>
              <li className="relative before:content-['→'] before:absolute before:-left-6 before:text-[var(--brand-blue-dim)]">
                The hidden "context layer" that determines whether AI sounds like you or like a robot
              </li>
              <li className="relative before:content-['→'] before:absolute before:-left-6 before:text-[var(--brand-blue-dim)]">
                Guardrails that prevent AI from going off the rails (without 47 re-prompting cycles)
              </li>
              <li className="relative before:content-['→'] before:absolute before:-left-6 before:text-[var(--brand-blue-dim)]">
                Systems that make your AI results predictable, aligned, and usable... first time
              </li>
            </ul>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              And I teach it all for free on my YouTube channel.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof - Real style */}
      <section className="section-frame py-20 bg-[var(--bg-secondary)]">
        <div className="section-content px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              Real people getting real results.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              Not gonna lie... getting emails like these never gets old.
            </p>
            
            {/* Testimonial placeholders - Miles uses email screenshots */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
                <p className="text-[var(--text-secondary)] italic mb-4">
                  "I've watched 50+ AI videos and yours was the first one that actually explained WHY I was getting garbage instead of just giving me another prompt to copy..."
                </p>
                <p className="text-sm text-[var(--text-muted)]">— Real email from a subscriber (placeholder)</p>
              </div>
              
              <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
                <p className="text-[var(--text-secondary)] italic mb-4">
                  "Finally someone who treats AI like a tool, not a magic trick. Your framework completely changed how I work with ChatGPT..."
                </p>
                <p className="text-sm text-[var(--text-muted)]">— Real email from a subscriber (placeholder)</p>
              </div>
            </div>
            
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mt-8">
              The pattern I see? People who implement what I teach... who actually set up the structure instead of just collecting prompts... they stop fighting AI. And start getting results they can actually use.
            </p>
          </div>
        </div>
      </section>

      {/* About / Story */}
      <section className="section-frame py-20" id="about">
        <div className="section-content px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              Why I do this.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              I've been in the AI space long enough to see the pattern.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Beginners don't fail because they lack intelligence. They fail because they were sold unrealistic framing. AI is powerful, but it's not magic. It amplifies structure. If your structure is weak, it amplifies chaos. If your structure is sound, it amplifies capability.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Most AI content out there is hype. "AI will replace you!" "This one prompt changed everything!" "Build a business in 5 minutes with ChatGPT!"
            </p>
            <p className="text-lg text-[var(--text-primary)] leading-relaxed mb-6">
              That's noise. I'm here for the signal.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I teach in public. I explain mechanisms fully. I don't withhold knowledge to create artificial scarcity. If someone never buys anything from me, they should still benefit meaningfully from my free content.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Clear path */}
      <section className="section-frame py-20 bg-[var(--bg-secondary)]">
        <div className="section-content px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              Where to start.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              The best place to begin is my YouTube channel. I've got free tutorials that walk through the core framework... context, direction, guardrails, systems.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              No ads. No pitches. Just practical breakdowns of how to make AI work for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dim)]">
                Subscribe on YouTube
              </Button>
              <Button size="lg" variant="outline">
                Get the Free Framework
              </Button>
            </div>
            
            <p className="text-base text-[var(--text-muted)] mt-8">
              I also send out helpful emails about once a week. Practical stuff, no fluff. You can sign up below.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="section-content px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Simon Page" className="h-5 w-5" />
              <span>© 2026 Simon Page</span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition">About</a>
              <a href="#" className="hover:text-white transition">YouTube</a>
              <a href="#" className="hover:text-white transition">Contact</a>
              <a href="#" className="hover:text-white transition">Privacy</a>
            </nav>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-6 text-center">
            I share tools and resources I use myself. Some links are affiliate links, which means I may earn a commission if you make a purchase.
          </p>
        </div>
      </footer>
    </div>
  );
}
