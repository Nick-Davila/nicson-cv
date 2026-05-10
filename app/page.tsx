export default function CvNicsonDavila() {
  const skills = [
    "Power BI", "Python", "SQL", "Java", "Angular", "Spring Boot", "GIS", "QGIS",
    "AWS", "Microsoft Azure", "SharePoint", "Power Apps", "SIGA", "SIAF", "HTML", "CSS", "Bootstrap"
  ];

  const experience = [
    {
      role: "Analista de Datos y Monitoreo de Proyectos",
      company: "PRONIED — UGEO, Ministerio de Educación del Perú",
      period: "Junio 2025 — Actualidad",
      items: [
        "Desarrollo de tableros de control en Power BI para el seguimiento físico y financiero de proyectos de inversión pública.",
        "Diseño e implementación de una base de datos consolidada para la cartera UGEO, desde formulación hasta liquidación.",
        "Elaboración de informes técnicos, ayudas memoria, alertas, análisis de riesgos y propuestas de mejora.",
        "Diseño de prototipos de herramientas para integrar, simplificar y trazabilizar información de inversión pública.",
        "Aseguramiento de calidad, integridad y consistencia de datos para una gestión pública transparente y eficiente."
      ]
    },
    {
      role: "Analista de Datos e Inteligencia de Negocios",
      company: "Autoridad para la Reconstrucción con Cambios — PCM",
      period: "Junio 2023 — Diciembre 2023",
      items: [
        "Desarrollo y mantenimiento de repositorios de datos para intervenciones del Sector Educación en el marco del PIRCC.",
        "Participación en el análisis, diseño y desarrollo de una plataforma web para la gestión integral de intervenciones.",
        "Elaboración de reportes y visualizaciones en Power BI para soporte a la toma de decisiones.",
        "Seguimiento del avance físico y financiero de intervenciones, garantizando trazabilidad de la información."
      ]
    },
    {
      role: "Analista y Desarrollador de Sistemas de Información",
      company: "GEOAUTO S.A.C.",
      period: "Febrero 2018 — Diciembre 2020",
      items: [
        "Gestión, coordinación y resolución de incidentes de soporte técnico.",
        "Instalación de aplicaciones, servidores web y sistemas corporativos.",
        "Administración de servidores Linux Debian en AWS y entornos Microsoft Azure.",
        "Desarrollo e implementación de soluciones informáticas para automatización de procesos internos."
      ]
    },
    {
      role: "Analista Programador GIS",
      company: "LINEAGIS S.A.C.",
      period: "Enero 2011 — Septiembre 2015",
      items: [
        "Desarrollo de aplicaciones web y móviles georreferenciales para control y seguimiento de vehículos y flotas.",
        "Soporte y actualización de bases de datos georreferenciales con Python y QGIS.",
        "Georreferenciación masiva de direcciones mediante scripts en Python."
      ]
    }
  ];

  const education = [
    "Bachiller en Ciencias con mención en Ingeniería de Sistemas — Universidad Nacional de Ingeniería (UNI)",
    "Master en Control de Proyectos y Gestión de Programas — ARCC",
    "Diplomado Especializado SIGA - SIAF — CEPEG",
    "Power BI: Análisis de Datos y Business Intelligence — Udemy",
    "Full Stack Java Developer — TODO TIC",
    "Spring Boot, Angular, Android, Ionic y Microservicios — Udemy / Coderhouse"
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-8 text-slate-100 print:bg-white print:px-0 print:py-0 print:text-slate-900">
      <section className="mx-auto grid max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/95 text-slate-900 shadow-2xl print:max-w-none print:rounded-none print:border-0 print:shadow-none lg:grid-cols-[340px_1fr]">
        <aside className="relative bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 p-8 text-white print:bg-slate-950">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-red-600 via-white to-red-600" />

          <div className="mt-4 flex items-start justify-between gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-3xl font-black tracking-tight shadow-xl">
              KAREN TE AMO 
            </div>

            <div className="rounded-3xl border border-white/15 bg-white p-3 shadow-2xl">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=176x176&data=https%3A%2F%2Flinkedin.com%2Fin%2Fnicson-davila-diaz-890622203"
                alt="QR LinkedIn Nicson Davila Díaz"
                className="h-[88px] w-[88px] rounded-xl"
              />
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight">
            Nicson Davila Díaz
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-100">
            Data Analyst · BI · GIS · Full Stack
          </p>

          <div className="mt-8 space-y-3 text-sm text-slate-200">
            <p>📍 Miraflores, Lima, Perú</p>
            <p>📞 936 683 185</p>
            <p>✉️ ndavilad@uni.pe</p>
            <p>✉️ n.davila.d@gmail.com</p>
            <p>🔗 linkedin.com/in/nicson-davila-diaz-890622203</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xs font-black uppercase tracking-[0.28em] text-red-100">Stack técnico</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-5">
            <h2 className="text-xs font-black uppercase tracking-[0.28em] text-red-100">Especialidad</h2>
            <p className="mt-3 text-sm leading-6 text-slate-100">
              Soluciones tecnológicas aplicadas a la gestión de proyectos públicos, inteligencia de negocios,
              modelado de datos, automatización, GIS y visualización ejecutiva.
            </p>
          </div>
        </aside>

        <section className="p-8 lg:p-10">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-red-700">Perfil profesional</p>
            <p className="mt-4 text-[15px] leading-7 text-slate-700">
              Bachiller en Ingeniería de Sistemas por la Universidad Nacional de Ingeniería, con experiencia en
              análisis de datos, inteligencia de negocios, visualización de información, bases de datos, entornos GIS,
              automatización de procesos y desarrollo de software. Especializado en soluciones digitales para la gestión
              de inversiones públicas, desde formulación hasta liquidación, con enfoque en trazabilidad, eficiencia,
              transparencia y toma de decisiones basada en datos.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-black uppercase tracking-[0.28em] text-slate-950">Experiencia profesional</h2>
            <div className="mt-5 space-y-6">
              {experience.map((job) => (
                <article key={job.role} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-black text-slate-950">{job.role}</h3>
                      <p className="mt-1 text-sm font-semibold text-red-700">{job.company}</p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{job.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                    {job.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-black uppercase tracking-[0.28em] text-slate-950">Formación y certificaciones</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {education.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white">
              <h2 className="text-sm font-black uppercase tracking-[0.28em] text-red-100">Valor diferencial</h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                Perfil híbrido entre datos, desarrollo web, GIS y gestión pública. Capacidad para transformar información
                dispersa en sistemas, dashboards e indicadores útiles para equipos técnicos y directivos.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">BI</p>
                  <p className="text-xs text-slate-300">Dashboards</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">GIS</p>
                  <p className="text-xs text-slate-300">Mapas y datos</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">SQL</p>
                  <p className="text-xs text-slate-300">Modelado</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black">Web</p>
                  <p className="text-xs text-slate-300">Apps modernas</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
