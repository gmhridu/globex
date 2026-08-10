import { sans, serif } from "@/lib/utils";

const teamImages = [
  "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1573164574511-73c773193279?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&auto=format",
];
export function ReadyToMakeImpact() {
  return (
    <section id="careers-mission" className="border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Team photo mosaic */}
          <div className="grid grid-cols-3 gap-px bg-border self-start">
            {teamImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-card"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={img}
                  alt="Globex team member"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 hover:opacity-90 duration-500 hover:scale-105 transition-transform"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,15,20,0.5) 0%, transparent 60%)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Copy */}
          <div className="py-16 px-8 lg:px-14 flex flex-col justify-center">
            <span className="w-6 h-px bg-[#e8a020] block mb-6" />
            <h2
              className="text-5xl md:text-6xl uppercase leading-none mb-10"
              style={serif()}
            >
              Ready to Make
              <br />
              <span className="text-[#e8a020]">an Impact?</span>
            </h2>

            <div className="space-y-0">
              {[
                {
                  title: "Our Mission",
                  body: "We exist to help manufacturers reach the world. Every team member plays a direct role in building international businesses that wouldn't exist without us.",
                },
                {
                  title: "Making an Impact",
                  body: "We measure success in active trading relationships — real revenue, real markets, real manufacturers building something that lasts.",
                },
                {
                  title: "Company Culture",
                  body: "Small team. High trust. Genuine autonomy. We hire people who take ownership and back them to do their best work without bureaucracy getting in the way.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="py-7 border-b border-border last:border-0"
                >
                  <h3
                    className="text-xl uppercase mb-2 text-[#e8a020]"
                    style={serif(700)}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    style={sans()}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
