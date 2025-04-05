
import { LoginForm } from "@/components/auth/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200 p-4 sm:p-6 md:p-8">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=2080&auto=format&fit=crop')",
          filter: "blur(3px)"
        }}
      />
      
      <Card className="w-full max-w-md z-10 glass-card animate-fade-in">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-primary mr-2"
              >
                <circle cx="14" cy="10" r="2.5"/>
                <path d="M16.5 15h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V5c0-.5-.2-1-.6-1.4C18 3.2 17.5 3 17 3H8c-.5 0-1 .2-1.4.6C6.2 4 6 4.5 6 5v8c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6h.5"/>
                <path d="M11 15h4"/>
                <path d="M6 15v3c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6h8c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4v-3"/>
              </svg>
              <span className="text-primary text-sm font-semibold">Retail Eye</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>Log in to access your retail insights dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Contact your administrator
            </a>
          </p>
        </CardContent>
      </Card>
      
      <footer className="absolute bottom-4 text-center text-xs text-gray-500">
        © 2025 Retail Eye Analytics. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
