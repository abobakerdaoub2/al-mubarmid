import { useState } from 'react';
import { Terminal, Sun, Moon, FileText, Store, BookOpen, Briefcase, Laptop, Building, GraduationCap, UtensilsCrossed } from 'lucide-react';

const projects = [
  { title: 'منصة "تاجر الذكية" لزيادة المبيعات', category: 'منصات تجارية وتسويقية', icon: Store, desc: 'منصة عرض منتجات وإدارة كوبونات خصم لزيادة ولاء الزبائن.', msg: 'مرحباً المبرمج أرغب في الاستفسار عن منصة تاجر الذكية.' },
  { title: 'الموقع التعريفي للشركات', category: 'هوية الشركات', icon: Briefcase, desc: 'موقع تعريفي فاخر يعرض الخدمات، الرؤية، وسابقة الأعمال.', msg: 'مرحباً المبرمج أرغب في الاستفسار عن موقع تعريفي للشركة.' },
  { title: 'المتاجر الإلكترونية المتكاملة', category: 'التجارة الإلكترونية', icon: Laptop, desc: 'متجر إلكتروني متكامل يدعم السلة، بوابات الدفع، والمخزون.', msg: 'مرحباً المبرمج أرغب في الاستفسار عن بناء متجر إلكتروني.' },
  { title: 'المواقع العقارية المتقدمة', category: 'مواقع عقارية', icon: Building, desc: 'منصة عقارية متطورة مع فلاتر بحث وتواصل مباشر.', msg: 'مرحباً المبرمج أرغب في الاستفسار عن الموقع العقاري.' },
  { title: 'مواقع المدارس والمعاهد التعليمية', category: 'مواقع مدارس ومعاهد', icon: GraduationCap, desc: 'نظام رقمي لتنظيم الجداول، غياب الطلاب، والشهادات.', msg: 'مرحباً المبرمج أرغب في الاستفسار عن نظام إدارة المدارس.' },
  { title: 'موقع المطاعم مع طلب أونلاين', category: 'مطاعم وطلب أونلاين', icon: UtensilsCrossed, desc: 'منصة تتيح للزبائن تصفح المنيو، تخصيص الوجبات، والدفع.', msg: 'مرحباً المبرمج أرغب في الاستفسار عن موقع مطعم.' },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // دالة فتح الماسنجر المباشر
  const openMessenger = (msg: string) => {
    const PAGE_ID = '100063597997739'; 
    const url = `https://m.me/${PAGE_ID}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`min-h-screen relative ${darkMode ? 'text-white' : 'text-gray-900'}`} dir="rtl">
      
      {/* الصورة كخلفية ثابتة */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/image_34ff65.jpg')` }}
      >
        <div className={`absolute inset-0 ${darkMode ? 'bg-black/70' : 'bg-white/60'}`}></div>
      </div>

      <div className="relative z-10 p-4 md:p-8">
        <header className="max-w-6xl mx-auto flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
             <div className="bg-blue-600 p-2 rounded-lg"><Terminal size={20}/></div>
             <span className="font-black text-lg">المبرمج </span>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
             {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </header>

        <section className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black mb-6">موقع أعمال المبرمج </h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>أبني أنظمة إدارية متكاملة للجامعات، منصات للتجار لزيادة مبيعاتهم وجذب الزبائن، وتطبيقات معززة بالكامل بالذكاء الاصطناعي.</p>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <div key={i} className={`${darkMode ? 'bg-black/40 border-white/10' : 'bg-white/70 border-gray-300'} backdrop-blur-md p-6 rounded-2xl border flex flex-col hover:border-blue-500 transition-all duration-300`}>
              <p className="text-[10px] text-blue-500 font-bold mb-2 uppercase">{p.category}</p>
              <h3 className="font-black text-sm mb-3 leading-relaxed">{p.title}</h3>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 flex-grow`}>{p.desc}</p>
              <button 
                  onClick={() => openMessenger(p.msg)}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold rounded-xl transition shadow-lg"
              >
                احصل علي عرض تجريبي 💬
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}