import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <div className="px-20 w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-semibold hover:text-secondary">
                Almost Ready? Let’s Clear Up Your Questions
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                If you’re still wondering about a few things before subscribing, 
                here are the answers to what most clients ask us!
              </p>
            </div>
            <div className="">
              <Button className="gap-4 hover:bg-primary hover:text-white" variant="outline">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "Apa saja layanan unggulan Nyambi Digital Agency?",
              answer: "Kami menyediakan Web Development, Web Maintenance, Digital Strategy, Optimasi SEO, Pembuatan Job Portal, dan Sistem Invoice Otomatis. Setiap layanan dirancang untuk meningkatkan efisiensi bisnis digital Anda.",
              keywords: ["layanan digital agency", "web development", "optimasi SEO"]
            },
            {
              question: "Bagaimana proses pengembangan website di Nyambi Digital?",
              answer: "Proses kami dimulai dengan Discovery & Needs Assessment, dilanjutkan dengan pembuatan wireframe, development menggunakan tech stack terkini, hingga review dan optimasi performa website.",
              keywords: ["proses pembuatan website", "tech stack terkini", "web development"]
            },
            {
              question: "Apakah Nyambi Digital menyediakan layanan maintenance website?",
              answer: "Ya! Kami menyediakan layanan pemeliharaan website termasuk update konten, optimasi kecepatan loading, perbaikan bug, dan peningkatan keamanan secara berkala.",
              keywords: ["maintenance website", "optimasi website", "keamanan website"]
            },
            {
              question: "Bagaimana strategi digital Nyambi meningkatkan konversi bisnis?",
              answer: "Dengan analisis data mendalam, kami merancang strategi berbasis SEO, konten marketing, dan UX optimization untuk meningkatkan traffic organik dan engagement pengguna.",
              keywords: ["strategi digital marketing", "SEO", "konversi bisnis"]
            },
            {
              question: "Apakah portofolio Nyambi Digital tersedia untuk dilihat?",
              answer: "Tentu! Kami telah mengerjakan proyek seperti Web Radian Edu, Job Portal Radian, dan Sistem Invoice Otomatis dengan hasil peningkatan performa hingga 70%.",
              keywords: ["portofolio digital agency", "case study", "hasil nyata"]
            },
            {
              question: "Berapa lama durasi pengembangan website profesional?",
              answer: "Durasi bervariasi tergantung kompleksitas proyek. Untuk website perusahaan sederhana: 2-4 minggu. Sistem kompleks seperti e-learning: 3-6 bulan.",
              keywords: ["durasi pembuatan website", "web development timeline", "proyek digital"]
            },
            {
              question: "Bagaimana Nyambi Digital menjamin keamanan website?",
              answer: "Kami menggunakan SSL encryption, regular security patch, firewall protection, dan implementasi best practices OWASP untuk proteksi maksimal.",
              keywords: ["keamanan website", "proteksi data", "SSL encryption"]
            },
            {
              question: "Apakah menyediakan layanan darurat untuk technical issue?",
              answer: "Ya! Tim support kami siap membantu 24/7 untuk masalah urgent melalui WhatsApp dan email prioritas.",
              keywords: ["dukungan teknis", "layanan darurat", "technical support"]
            }
          ].map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p>{item.answer}</p>
                <div className="mt-2 text-sm text-muted-foreground">
                  {item.keywords.join(" • ")}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
  );
}
