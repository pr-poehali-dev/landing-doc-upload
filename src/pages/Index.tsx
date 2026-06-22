import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';

const DOCTOR_IMG = 'https://cdn.poehali.dev/projects/2e1dac48-a46b-425f-a31a-0d97725906d3/files/7c025b44-3513-4b55-8cf6-120287c0313f.jpg';

const services = [
  { icon: 'Stethoscope', title: 'Индивидуальные консультации', color: 'peach', angle: 0 },
  { icon: 'BookOpen', title: 'Лекции и вебинары', color: 'gold', angle: 72 },
  { icon: 'Users', title: 'Семинары и встречи', color: 'rose', angle: 144 },
  { icon: 'Sparkles', title: 'Тета-хилинг и практики', color: 'violet', angle: 216 },
  { icon: 'PlayCircle', title: 'База знаний — видео', color: 'sage', angle: 288 },
];

const pains = [
  { icon: 'HelpCircle', title: 'Медицинская неопределённость', text: 'Нет диагноза, но самочувствие оставляет желать лучшего.' },
  { icon: 'BatteryLow', title: 'Хроническая усталость', text: 'Боли возвращаются снова, а энергии всё меньше.' },
  { icon: 'Wind', title: 'Тревога', text: 'Обострения возникают на нервной почве и в стрессе.' },
  { icon: 'Scale', title: 'Баланс', text: 'Хочется гармонии между наукой и природой.' },
];

const events = [
  { date: '15 марта', title: 'Вебинар про стресс', place: 'Онлайн', icon: 'Video' },
  { date: '22 марта', title: 'Семинар-практикум', place: 'Офлайн, Москва', icon: 'MapPin' },
  { date: '5–9 апреля', title: 'Горный поход', place: 'Выездной', icon: 'Mountain' },
];

const reviews = [
  { name: 'Анна', age: '34 года', text: 'Впервые меня услышали целиком — не как набор симптомов. Ушла тревога, вернулась энергия.' },
  { name: 'Екатерина', age: '41 год', text: 'Соединение доказательной медицины и телесных практик дало результат, которого я ждала годами.' },
  { name: 'Ольга', age: '29 лет', text: 'Спокойно, бережно, без осуждения. Валерия — врач, которому доверяешь с первой минуты.' },
];

const Star = ({ top, left, delay, size }: { top: string; left: string; delay: string; size: number }) => (
  <span className="absolute rounded-full bg-gold animate-twinkle" style={{ top, left, width: size, height: size, animationDelay: delay }} />
);

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState('Получить консультацию');
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const openForm = (title: string) => {
    setFormTitle(title);
    setSent(false);
    setAgreed(false);
    setFormOpen(true);
  };

  return (
    <div className="min-h-screen cosmos-bg overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 glass">
        <div className="container flex items-center justify-between py-4">
          <a href="#hero" className="font-display text-2xl tracking-wide text-primary">Валерия Охриц</a>
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">О враче</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#events" className="hover:text-primary transition-colors">События</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button onClick={() => openForm('Получить консультацию')} className="rounded-full bg-gold text-cosmos hover:bg-gold/90 font-medium">
            Консультация
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16">
        <Star top="18%" left="12%" delay="0s" size={4} />
        <Star top="28%" left="85%" delay="1.2s" size={6} />
        <Star top="65%" left="8%" delay="0.6s" size={5} />
        <Star top="75%" left="78%" delay="2s" size={4} />
        <Star top="40%" left="50%" delay="1.5s" size={3} />
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="flex flex-wrap gap-2 mb-6">
              {['Гинеколог', 'Уролог', 'КМН', 'Психосоматика'].map((t) => (
                <span key={t} className="glass rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-muted-foreground">{t}</span>
              ))}
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-primary mb-6 text-balance">
              Врач нового<br />поколения
            </h1>
            <p className="font-display text-2xl md:text-3xl italic text-gold mb-6">Обрети связь между телом и эмоциями</p>
            <p className="text-muted-foreground max-w-md mb-9 leading-relaxed">
              Помогаю обрести здоровье тела и ясность ума — без противоречий между наукой и природой.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => openForm('Получить консультацию')} size="lg" className="rounded-full bg-cosmos text-background hover:bg-cosmos/90 px-8">
                Получить консультацию
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary/30 px-8">
                <a href="#services">Мои услуги</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-peach/40 via-rose/30 to-violet/30 blur-2xl" />
            <img src={DOCTOR_IMG} alt="Валерия Охриц" className="relative rounded-[2rem] w-full object-cover shadow-2xl animate-float" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28">
        <div className="container max-w-4xl text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-5">О враче</p>
          <h2 className="font-display text-4xl md:text-6xl text-primary mb-8 text-balance italic">
            «Я не лечу симптомы — я восстанавливаю связь между телом и эмоциями»
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {[
              { icon: 'FlaskConical', label: 'Доказательная медицина' },
              { icon: 'Leaf', label: 'Традиционная китайская медицина' },
              { icon: 'Brain', label: 'Психосоматика и Тета-хилинг' },
              { icon: 'HandHeart', label: 'Телесные практики' },
            ].map((c) => (
              <div key={c.label} className="glass rounded-2xl p-6 hover-lift">
                <Icon name={c.icon} className="mx-auto mb-3 text-gold" size={30} />
                <p className="text-sm text-primary/80">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="py-24">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl text-center text-primary mb-14">Я знаю, что вас беспокоит</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pains.map((p) => (
              <div key={p.title} className="glass rounded-3xl p-7 hover-lift">
                <div className="w-12 h-12 rounded-2xl bg-peach/40 flex items-center justify-center mb-5">
                  <Icon name={p.icon} className="text-cosmos" size={24} />
                </div>
                <h3 className="font-display text-2xl text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — SOLAR SYSTEM */}
      <section id="services" className="relative py-28 cosmos-dark overflow-hidden">
        <Star top="10%" left="20%" delay="0s" size={4} />
        <Star top="22%" left="70%" delay="1s" size={5} />
        <Star top="80%" left="30%" delay="1.7s" size={4} />
        <Star top="60%" left="88%" delay="0.4s" size={6} />
        <div className="container text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Что я предлагаю</p>
          <h2 className="font-display text-4xl md:text-6xl text-background mb-4">Мои услуги</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-12">Пять направлений на одной орбите заботы о вас</p>

          {/* Desktop orbit */}
          <div className="relative mx-auto hidden md:block" style={{ width: 560, height: 560 }}>
            <div className="absolute inset-0 rounded-full border border-background/10" />
            <div className="absolute inset-16 rounded-full border border-background/10" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full glass-dark flex flex-col items-center justify-center animate-pulse-glow">
              <Icon name="Sun" className="text-gold mb-1" size={34} />
              <span className="font-display text-xl text-background">Валерия</span>
              <span className="text-[10px] tracking-widest text-background/60 uppercase">центр заботы</span>
            </div>
            <div className="absolute inset-0" style={{ animation: 'spinSlow 60s linear infinite' }}>
              {services.map((s) => {
                const r = 240;
                const x = Math.cos((s.angle * Math.PI) / 180) * r;
                const y = Math.sin((s.angle * Math.PI) / 180) * r;
                return (
                  <button
                    key={s.title}
                    onClick={() => openForm(s.title)}
                    className="absolute left-1/2 top-1/2 group"
                    style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                  >
                    <div className="w-32 h-32 rounded-full glass-dark flex flex-col items-center justify-center p-3 hover:scale-110 transition-transform" style={{ animation: 'spinReverse 60s linear infinite' }}>
                      <Icon name={s.icon} className="mb-2" size={26} style={{ color: `hsl(var(--${s.color}))` }} />
                      <span className="text-[11px] leading-tight text-background/90">{s.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile list */}
          <div className="md:hidden grid gap-4 mt-6">
            {services.map((s) => (
              <button key={s.title} onClick={() => openForm(s.title)} className="glass-dark rounded-2xl p-5 flex items-center gap-4 text-left">
                <Icon name={s.icon} size={26} style={{ color: `hsl(var(--${s.color}))` }} />
                <span className="text-background">{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-28">
        <div className="container max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl text-center text-primary mb-14">Ближайшие события</h2>
          <div className="space-y-5">
            {events.map((e) => (
              <div key={e.title} className="glass rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 hover-lift">
                <div className="flex items-center gap-4 md:w-56 shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center">
                    <Icon name={e.icon} className="text-gold" size={24} />
                  </div>
                  <span className="font-display text-2xl text-primary">{e.date}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-primary">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.place}</p>
                </div>
                <Button onClick={() => openForm(`Запись на: ${e.title}`)} className="rounded-full bg-cosmos text-background hover:bg-cosmos/90">
                  Записаться
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl text-center text-primary mb-14">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="glass rounded-3xl p-8 hover-lift">
                <Icon name="Quote" className="text-gold mb-4" size={28} />
                <p className="text-primary/80 italic leading-relaxed mb-6 font-display text-xl">{r.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-peach to-rose flex items-center justify-center text-cosmos font-medium">{r.name[0]}</div>
                  <div>
                    <p className="text-primary font-medium text-sm">{r.name}</p>
                    <p className="text-muted-foreground text-xs">{r.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="relative cosmos-dark py-24 mt-10">
        <Star top="20%" left="15%" delay="0.3s" size={5} />
        <Star top="70%" left="80%" delay="1.4s" size={4} />
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl text-background mb-5">Приглашаю в своё пространство</h2>
          <p className="text-background/60 mb-12 max-w-xl mx-auto">Здесь нет осуждения — только забота и профессионализм.</p>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            <a href="tel:+70000000000" className="glass-dark rounded-2xl p-6 hover-lift block">
              <Icon name="Phone" className="text-gold mx-auto mb-3" size={26} />
              <p className="text-background text-sm">Татьяна, менеджер</p>
              <p className="text-background/60 text-xs">Позвонить</p>
            </a>
            <a href="https://t.me/okhrits" target="_blank" rel="noreferrer" className="glass-dark rounded-2xl p-6 hover-lift block">
              <Icon name="Send" className="text-gold mx-auto mb-3" size={26} />
              <p className="text-background text-sm">Telegram</p>
              <p className="text-background/60 text-xs">@okhrits</p>
            </a>
            <a href="https://instagram.com/doctor_okhrits" target="_blank" rel="noreferrer" className="glass-dark rounded-2xl p-6 hover-lift block">
              <Icon name="Instagram" className="text-gold mx-auto mb-3" size={26} />
              <p className="text-background text-sm">Instagram</p>
              <p className="text-background/60 text-xs">doctor_okhrits</p>
            </a>
          </div>
          <Button onClick={() => openForm('Получить консультацию')} size="lg" className="rounded-full bg-gold text-cosmos hover:bg-gold/90 px-10">
            Получить консультацию
          </Button>
          <p className="text-background/40 text-xs mt-12">© 2025 Валерия Охриц. Все права защищены.</p>
        </div>
      </footer>

      {/* FORM DIALOG */}
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="rounded-3xl border-none bg-popover">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl text-primary">{formTitle}</DialogTitle>
          </DialogHeader>
          {sent ? (
            <div className="py-8 text-center">
              <Icon name="CheckCircle2" className="text-sage mx-auto mb-4" size={48} />
              <p className="text-primary font-display text-2xl">Спасибо!</p>
              <p className="text-muted-foreground text-sm mt-2">Татьяна свяжется с вами в ближайшее время.</p>
            </div>
          ) : (
            <form
              onSubmit={(ev) => { ev.preventDefault(); if (agreed) setSent(true); }}
              className="space-y-4 pt-2"
            >
              <Input required placeholder="Ваше имя" className="rounded-xl h-12" />
              <Input required type="email" placeholder="Email" className="rounded-xl h-12" />
              <label className="flex items-start gap-3 text-xs text-muted-foreground cursor-pointer">
                <Checkbox checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} className="mt-0.5" />
                <span>Я согласен(на) на обработку персональных данных и принимаю политику конфиденциальности</span>
              </label>
              <Button type="submit" disabled={!agreed} className="w-full rounded-xl h-12 bg-cosmos text-background hover:bg-cosmos/90">
                Отправить заявку
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;