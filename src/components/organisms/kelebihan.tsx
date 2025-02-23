import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "../moleculs/card";


export function KelebihanSection() {
  return (
    <div className=" px-20 w-full mx-auto pt-20 lg:pt-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
           <Badge variant="outline">Your Growth</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-left">
              No More Digital Hassles!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              We Design, Build, and Maintain—So You Can Focus on Growth!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col gap-2">
            <CardContent className="p-4">
            <div className="bg-muted rounded-md aspect-video mb-2"></div>
            <CardTitle className="text-xl tracking-tight">Website Lemot & Tidak Optimal</CardTitle>
            <CardDescription className="text-muted-foreground text-base">
            Pernah buka website tapi loading-nya kayak jalan santai? 
            Kami bantu bikin website yang cepat, responsif, dan SEO-friendly biar nggak bikin pengunjung kabur.
            </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col gap-2">
            <CardContent className="p-4">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <CardTitle className="text-xl tracking-tight">Biaya Pengelolaan yang Tidak Terduga</CardTitle>
              <CardDescription className="text-muted-foreground text-base">
              Hosting, maintenance, update—biaya bisa numpuk kalau nggak terencana. Dengan layanan kami, 
              semua sudah dihitung dalam satu paket, tanpa kejutan!
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col gap-2">
            <CardContent className="p-4">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <CardTitle className="text-xl tracking-tight">Sulit Menemukan Tim Digital yang Bisa Diandalkan</CardTitle>
              <CardDescription className="text-muted-foreground text-base">
              Nyari developer, desainer, dan tester yang paham kebutuhan bisnis itu PR besar. Tenang, kami punya tim yang solid buat urusan ini!
            </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col gap-2">
            <CardContent className="p-4">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <CardTitle className="text-xl tracking-tight">Keamanan Website yang Rentan</CardTitle>
              <CardDescription className="text-muted-foreground text-base">
              Serangan hacker atau website yang tiba-tiba down? Kami siap dengan solusi keamanan terbaik, jadi nggak perlu panik kalau ada masalah teknis.
            </CardDescription>
           </CardContent>
          </Card>
          <Card className="flex flex-col gap-2">
            <CardContent className="p-4">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <CardTitle className="text-xl tracking-tight">Website Tidak Sesuai dengan Kebutuhan Bisnis</CardTitle>
              <CardDescription className="text-muted-foreground text-base">
              Desainnya nggak representatif, fitur nggak sesuai, atau malah bikin user bingung? Kami pastikan website kamu bukan cuma keren, tapi juga berfungsi maksimal!
              </CardDescription>
            </CardContent>
         </Card>
          <Card className="flex flex-col gap-2">
            <CardContent className="p-4">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <CardTitle className="text-xl tracking-tight">Kurangnya Support & Maintenance yang Cepat</CardTitle>
              <CardDescription className="text-muted-foreground text-base">
              Error tengah malam? Ada bug pas lagi banyak pengunjung? Tim support kami siap 24/7 biar website kamu selalu jalan lancar!
              </CardDescription>
            </CardContent>
         </Card>
       </div>
      </div>
    </div>
  </div>
  );
}
