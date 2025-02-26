import Image from 'next/image';
import { LoginForm } from "@/components/moleculs/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a className="flex items-center gap-2 font-medium">
            <Image
              className="dark:invert w-32 md:w-40 lg:w-48"
              src="/logo-nyambidigi.svg"
              alt="Nyambi Digital Agency Logo"
              width={180}
              height={38}
              priority
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/poster-login.svg"
          alt="Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
