import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnim from "./animasyon/mail.json";
import './Giris.css';

export default function Iletisim() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_bgxal72",
                "template_0eqdeui",
                form.current,
                "VKtxxvcI5JG5nR_-W"
            )
            .then(
                () => {
                    console.log("Mesajınız başarıyla gönderildi!");
                    form.current.reset();
                },
                (error) => {
                    console.error("Bir hata oluştu: ", error.text);
                }
            );
    };

    return (
        <div className="iletisim-container">
            <div className="iletisim-animasyon-wrapper">
                <Player autoplay loop src={contactAnim} className="iletisim-animasyon-player" />
            </div>

            <h2 className="iletisim-baslik-metin">
                Benimle her zaman iletişime geçebilirsiniz.
            </h2>

            <form
                ref={form}
                onSubmit={sendEmail}
                className="iletisim-form"
            >
                <div className="form-group">
                    <label htmlFor="user_name">Adınız Soyadınız</label>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        required
                        placeholder="Adınızı girin"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="user_email">Mail Adresiniz</label>
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        required
                        placeholder="Mail adresinizi yazın"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Mesajınız</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        required
                        placeholder="Mesajınızı buraya yazınız"
                        className="form-textarea"
                    />
                </div>

                <button
                    type="submit"
                    className="iletisim-button"
                >
                    Gönder
                </button>
            </form>
        </div>
    );
}
