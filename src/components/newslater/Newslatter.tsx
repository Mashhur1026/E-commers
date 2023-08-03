import "./newsletter.css";

function Newslatter() {
  return (
    <section id="newsletter">
      <div className="newstext">
        <h4>Yangi mahsulotlardan xabardor bo'lish uchun obuna bo'ling</h4>
        <p>
          Bizning <span> maxsus takliflar</span> haqida elektron pochta orqali
          habardor bo'ling
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Emailinggiz" />
        <button className="normol">Ro'yxatdan o'tish</button>
      </div>
    </section>
  );
}

export default Newslatter;
