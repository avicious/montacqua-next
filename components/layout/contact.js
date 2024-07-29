import styles from "./contact.module.css";

export default function Contact() {
  async function formHandler(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
  }
  return (
    <section className={styles.contact}>
      <div className="container">
        <h2>Any questions?</h2>
        <p>
          Send us a message and our amazing tem of people will get back to you
          as soon as they can.
        </p>
        <form action={formHandler}>
          <div className={styles.fieldRow}>
            <input
              type="text"
              name="name"
              maxLength="256"
              placeholder="Name"
              autoComplete="true"
            />
            <input
              type="email"
              name="email"
              maxLength="256"
              placeholder="Email"
              autoComplete="true"
            />
          </div>
          <textarea
            placeholder="Write message here...."
            maxLength="5000"
            name="message"
          ></textarea>
          <input type="submit" value="Send message" />
        </form>
      </div>
    </section>
  );
}
