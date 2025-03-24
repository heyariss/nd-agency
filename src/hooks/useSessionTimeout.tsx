// src/hooks/useSessionTimeout.ts
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export function useSessionTimeout(timeoutDuration: number) {
  const router = useRouter();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimeout = () => {
      // Reset timer setiap ada interaksi
      clearTimeout(timeoutId);
      timeoutId = setTimeout(logout, timeoutDuration);
    };

    const logout = async () => {
      await supabase.auth.signOut(); // Logout pengguna
      router.push("/login"); // Arahkan ke halaman login
    };

    // Tambahkan event listener untuk interaksi pengguna
    window.addEventListener("click", resetTimeout);
    window.addEventListener("keypress", resetTimeout);
    window.addEventListener("mousemove", resetTimeout);

    // Mulai timer saat komponen dimount
    resetTimeout();

    // Bersihkan event listener dan timeout saat komponen unmount
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("click", resetTimeout);
      window.removeEventListener("keypress", resetTimeout);
      window.removeEventListener("mousemove", resetTimeout);
    };
  }, [timeoutDuration, router]);
}