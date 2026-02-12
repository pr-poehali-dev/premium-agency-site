import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: "Sparkles",
      title: "Веб-дизайн",
      description: "Создаем уникальные и запоминающиеся интерфейсы, которые влюбляют в ваш бренд с первого взгляда"
    },
    {
      icon: "Code2",
      title: "Разработка",
      description: "Программируем высокопроизводительные решения с использованием передовых технологий"
    },
    {
      icon: "Megaphone",
      title: "Маркетинг",
      description: "Продвигаем ваш бизнес в цифровом пространстве с максимальной отдачей инвестиций"
    },
    {
      icon: "Smartphone",
      title: "Мобильные приложения",
      description: "Разрабатываем нативные и кроссплатформенные приложения для iOS и Android"
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Разработка",
      description: "Полный цикл создания премиальной платформы для онлайн-торговли",
      image: "https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/ff0a6bc3-70e3-448d-a1c0-556354aa05d0.jpg"
    },
    {
      title: "Corporate Website",
      category: "Веб-дизайн",
      description: "Корпоративный сайт международной компании с инновационным дизайном",
      image: "https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/3b92c666-db1a-4e8e-b907-4a23819bed50.jpg"
    },
    {
      title: "Mobile Banking App",
      category: "Мобильные приложения",
      description: "Приложение для управления финансами с биометрической авторизацией",
      image: "https://cdn.poehali.dev/projects/acc8769e-c8ec-49dd-ad45-d836356bdafc/files/111e3ed2-e001-474a-a307-cccf8e4daf88.jpg"
    }
  ];

  const process = [
    { step: "01", title: "Аналитика", description: "Глубокое изучение вашего бизнеса, конкурентов и целевой аудитории" },
    { step: "02", title: "Стратегия", description: "Разработка уникальной стратегии развития вашего цифрового присутствия" },
    { step: "03", title: "Дизайн", description: "Создание визуальной концепции, которая отражает ценности вашего бренда" },
    { step: "04", title: "Разработка", description: "Программирование с использованием современных технологий и best practices" },
    { step: "05", title: "Запуск", description: "Тестирование, оптимизация и вывод продукта на рынок" }
  ];

  const team = [
    { name: "Александр Волков", role: "Creative Director", image: "🎨" },
    { name: "Мария Соколова", role: "Lead Developer", image: "💻" },
    { name: "Дмитрий Орлов", role: "UX Designer", image: "✨" },
    { name: "Елена Новикова", role: "Marketing Director", image: "📊" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-zen tracking-wider text-primary">albe</h1>
          <div className="hidden md:flex gap-8 items-center">
            {["Главная", "О нас", "Услуги", "Портфолио", "Процесс", "Команда", "Контакты"].map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(["home", "about", "services", "portfolio", "process", "team", "contact"][i])}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in-slow">
          <h1 className="text-7xl md:text-9xl font-zen mb-8 text-primary tracking-widest">
            albe
          </h1>
          <p className="text-2xl md:text-4xl font-light mb-12 max-w-4xl mx-auto leading-relaxed">
            МЫ СОЗДАЕМ НЕ ПРОСТО САЙТЫ<br />
            <span className="text-primary font-medium">МЫ СОЗДАЕМ БИЗНЕС</span>
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6 rounded-sm">
            Начать проект
          </Button>
        </div>
      </section>

      <section id="about" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-light mb-8">О компании</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-12" />
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              ALBE — это digital-агентство премиум-класса, специализирующееся на создании 
              выдающихся цифровых продуктов. Мы не просто разрабатываем сайты и приложения — 
              мы создаем инструменты для роста вашего бизнеса.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Наша команда объединяет талантливых дизайнеров, разработчиков и маркетологов, 
              которые работают на стыке технологий и креатива.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-light mb-8">Услуги</h2>
            <div className="h-1 w-24 bg-primary mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <Card 
                key={i} 
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-6 text-primary">
                  <Icon name={service.icon} size={48} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-light mb-8">Портфолио</h2>
            <div className="h-1 w-24 bg-primary mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, i) => (
              <Card 
                key={i} 
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-2xl font-semibold mt-2 mb-4">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-light mb-8">Процесс</h2>
            <div className="h-1 w-24 bg-primary mx-auto" />
          </div>
          <div className="max-w-5xl mx-auto space-y-8">
            {process.map((item, i) => (
              <div 
                key={i} 
                className="flex gap-8 items-start group animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-6xl font-zen text-primary/20 group-hover:text-primary transition-colors min-w-[120px]">
                  {item.step}
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-light mb-8">Команда</h2>
            <div className="h-1 w-24 bg-primary mx-auto" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <Card 
                key={i} 
                className="p-8 text-center bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-5xl font-light mb-8">Контакты</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-12" />
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
              Готовы обсудить ваш проект?<br />
              Свяжитесь с нами удобным способом
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={24} className="text-primary" />
                <span className="text-lg">hello@albe.digital</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={24} className="text-primary" />
                <span className="text-lg">+7 (495) 123-45-67</span>
              </div>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6 rounded-sm">
              Отправить заявку
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl font-zen text-primary">albe</h2>
            <p className="text-muted-foreground text-sm">© 2026 ALBE Digital Agency. Все права защищены.</p>
            <div className="flex gap-6">
              <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              <Icon name="Linkedin" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              <Icon name="Twitter" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;