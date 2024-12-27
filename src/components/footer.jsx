import Link from "next/link";
import Logo2 from "@/assets/icons/logo-footer.png";
import SocialMediaList from "./ui/socialMediaList";
import Image from "next/image";
import dynamic from "next/dynamic";

// LeafletMap bileşenini dinamik olarak yükleyelim (SSR devre dışı)
const LeafletMap = dynamic(() => import("@/components/ui/leafletMap"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

const Footer = () => {
  return (
    <footer className="container-fluid mx-auto">
      <div className="bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-4 grid-cols-1 items-center pt-[100px] pb-20">
            {/* Sol Bölüm */}
            <div>
              <Link href="/home-1">
                <Image src={Logo2} alt="Logo" height="20" width="150" />
              </Link>
              <br />
              <SocialMediaList />
            </div>

            {/* Orta Bölüm */}
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
              <div>
                <h5 className="text-2xl font-extrabold block text-primary-foreground leading-160">
                  Keçidlər:
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                <div className="flex flex-col">
                  <Link href="/about-us" className="text-lg text-primary-foreground w-full">Haqqımızda </Link>
                  <Link href="/products" className="text-lg text-primary-foreground w-full">
                    Məhsullarımız
                  </Link>
                  <Link href="/referance" className="text-lg text-primary-foreground w-full">Referans</Link>
                  <Link href="/pdf/Azali-catalog.pdf" className="text-lg text-primary-foreground w-full">Kataloq </Link>
                  <Link href="/career" className="text-lg text-primary-foreground w-full">Karyera </Link>
                  <Link href="/contact" className="text-lg text-primary-foreground w-full">Əlaqə </Link>
                </div>
              </div>
            </div>

            {/* Sağ Bölüm */}
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
              <div>
                <h5 className="text-2xl font-extrabold inline-block text-primary-foreground leading-160">
                  Ünvan
                </h5>

                <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                <div className="mt-[18px]">
                  <p className="text-xl font-bold text-primary-foreground">
                    "Azali" MMC{" "}
                  </p>
                  <p className="text-lg text-primary-foreground">
                    Bakı şəhəri, Suraxanı rayonu,{" "}
                  </p>
                  <p className="text-lg text-primary-foreground">
                    Qaraçuxur qəsəbəsi,
                  </p>
                  <p className="text-lg text-primary-foreground">
                    İlqar Musayev küçəsi, 51{" "}
                  </p>
                </div>
                <div className="mt-[17px]">
                  <Link
                    href={"tel:+34962398486"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Telefon: <span>+994 50 227 90 20</span>
                  </Link>
                  <Link
                    href={"mailto:info@azali.az"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    E-poçt: <span>info@azali.az</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[300px] mt-5 md:h-full  md:mt-0">
              <LeafletMap />
            </div>
          </div>

          {/* Harita Bölümü */}

          <hr className="bg-primary text-primary-foreground" />
          <div className="py-8 lg:flex justify-between items-center">
            <span className="text-sm text-primary-foreground block">
              Made with Love by <Link href={"https://webonly.io"}>Webonly</Link>
            </span>
            <span className="text-sm text-primary-foreground block mt-3 lg:mt-0">
              ©2024, Azali, Bütün hüquqlar qorunur
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
