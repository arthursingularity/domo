import "./globals.css";

export const metadata = {
  title: {
    default: "Domo | Conectando você aos melhores profissionais"
  },
  description: "Encontre e contrate profissionais com segurança",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-background">
        {children}
      </body>
    </html>
  );
}
