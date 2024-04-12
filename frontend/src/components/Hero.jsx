import heroImage from "../images/working.png";

export default function Main() {
  return (
    <section className="hero py-6 lg:pt-7">
      <div className="hero-inner grid gap-7 lg:gap-0 grid-cols-1">
        <picture className="hero-image pl-6 lg:pl-0">
          <img src={heroImage} alt="" className="w-2/3" />
        </picture>
        <div className="site-desc flex flex-col justify-center gap-6 lg:gap-5">
          <div className="title text-xl t text-center">
            Làm ngắn URL thật dễ dàng
          </div>
          <p className="subtitle">
            Việc rút ngắn URL của bạn giúp chia sẻ dễ dàng hơn trên phương tiện
            truyền thông xã hội, email, tin nhắn văn bản và nhiều hơn nữa. Hãy
            thử nó dưới đây ngay lập tức.
          </p>
        </div>
      </div>
    </section>
  );
}
