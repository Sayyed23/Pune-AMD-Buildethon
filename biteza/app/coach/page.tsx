"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Send, Bot, User, ChevronLeft, Sparkles, 
  Leaf, Utensils, Zap, HelpCircle, ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AICoachPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your Biteza AI Coach. How can I help you eat better today? Whether you're looking for a healthy lunch or a budget-friendly snack, I've got you covered."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev, 
        { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again later." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "Healthy dinner under ₹200",
    "High protein desk snacks",
    "Quick pre-workout meal",
    "Alternative to office samosas"
  ];

  return (
    <div className="flex flex-col h-screen bg-background font-sans text-foreground max-w-2xl mx-auto border-x border-border/40 shadow-sm overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-border/50 px-4 py-4 flex items-center gap-3">
        <Link href="/">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex items-center gap-2 flex-1">
          <div className="bg-primary p-2 rounded-full text-white">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold font-heading leading-none">Biteza AI Coach</h1>
            <span className="text-xs text-primary font-medium flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 bg-vibrant-green rounded-full animate-pulse"></span>
              Online
            </span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-muted-foreground">
          <HelpCircle className="h-5 w-5" />
        </Button>
      </header>

      {/* Chat Area */}
      <main 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 no-scrollbar pb-10"
      >
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300`}
          >
            {msg.role === "assistant" && (
              <Avatar className="h-8 w-8 mb-1 border border-primary/20">
                <div className="bg-primary text-white h-full w-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
              </Avatar>
            )}
            <div 
              className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                msg.role === "user" 
                  ? "bg-foreground text-background rounded-br-none" 
                  : "bg-white border border-border shadow-sm text-foreground rounded-bl-none prose prose-sm prose-green"
              }`}
            >
              {msg.content}
            </div>
            {msg.role === "user" && (
              <Avatar className="h-8 w-8 mb-1 border border-border">
                <AvatarImage src="https://i.pravatar.cc/150?img=11" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start items-center gap-2">
            <Avatar className="h-8 w-8 border border-primary/20">
              <div className="bg-primary text-white h-full w-full flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
            </Avatar>
            <div className="bg-white border border-border p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
              <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce delay-150"></span>
              <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce delay-300"></span>
            </div>
          </div>
        )}
      </main>

      {/* Input Area */}
      <footer className="p-4 bg-white border-t border-border/50">
        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {/* Suggestions */}
          {messages.length < 3 && (
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {suggestions.map((s, i) => (
                <Badge 
                  key={i} 
                  variant="secondary" 
                  className="bg-secondary/50 text-muted-foreground hover:bg-secondary cursor-pointer whitespace-nowrap rounded-full px-3 py-1 transition-colors border-none"
                  onClick={() => setInput(s)}
                >
                  {s}
                </Badge>
              ))}
            </div>
          )}
          
          <div className="relative group">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask Biteza what to eat..."
              className="h-14 pr-14 pl-5 bg-secondary/30 border-none rounded-2xl shadow-inner focus-visible:ring-primary focus-visible:bg-white transition-all text-base"
              disabled={isLoading}
            />
            <Button 
              size="icon" 
              className={`absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl transition-all ${
                input.trim() ? "bg-primary text-white scale-105" : "bg-muted-foreground/20 text-muted-foreground"
              }`}
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-[10px] text-center text-muted-foreground px-4">
            AI suggestions are for guidance. Consult a professional for specific medical dietary needs.
          </p>
        </div>
      </footer>
    </div>
  );
}
