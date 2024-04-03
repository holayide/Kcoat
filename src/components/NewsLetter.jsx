import style from "./NewsLetter.module.css";

export default function NewsLetter() {
  return (
    <div className={style.wrapper}>
      <h4>Subscribe to our Newsletter to get the latest update</h4>
      <p>
        Receive exclusive updates on our latest fashion trends and products
        directly to your inbox
      </p>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div className={style.label}>
          <label htmlFor="email" name="mail">
            Email*
          </label>
        </div>
        <div className={style.input}>
          <input type="text" id="email" name="email" />
          <div>
            <input type="submit" value="Subscribe" className={style.submit} />
          </div>
        </div>
      </form>
    </div>
  );
}
