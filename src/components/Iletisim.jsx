import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnim from "./animasyon/mail.json";
import './Giris.css'

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
                    alert("Mesajınız başarıyla gönderildi!");
                    form.current.reset();
                },
                (error) => {
                    alert("Bir hata oluştu: " + error.text);
                }
            );
    };

    return (
        <div
            style={{
                marginLeft: "300px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "40px 20px",
                color: "white",
            }}
        >
            {}
            <div style={{ width: "350px", marginBottom: "30px" }}>
                <Player autoplay loop src={contactAnim} style={{ width: "100%" }} />
            </div>

            {}
            <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "22px" }}>
                Benimle her zaman iletişime geçebilirsiniz.
            </h2>

            {}
            <form
                ref={form}
                onSubmit={sendEmail}
                style={{
                    width: "100%",
                    maxWidth: "500px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    padding: "30px",
                    borderRadius: "16px",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 0 15px rgba(0,0,0,0.5)",
                }}
            >
                <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="user_name">Adınız Soyadınız</label>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        required
                        placeholder="Adınızı girin"
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "1px solid #555",
                            marginTop: "8px",
                            backgroundColor: "#1a1a1a",
                            color: "white",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="user_email">Mail Adresiniz</label>
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        required
                        placeholder="Mail adresinizi yazın"
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "1px solid #555",
                            marginTop: "8px",
                            backgroundColor: "#1a1a1a",
                            color: "white",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="message">Mesajınız</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        required
                        placeholder="Mesajınızı buraya yazınız"
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "1px solid #555",
                            marginTop: "8px",
                            resize: "none",
                            backgroundColor: "#1a1a1a",
                            color: "white",
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        backgroundColor: "#4f46e5",
                        color: "white",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        border: "none",
                        cursor: "pointer",
                        width: "100%",
                    }}
                >
                    Gönder
                </button>
            </form>
        </div>
    );
}
