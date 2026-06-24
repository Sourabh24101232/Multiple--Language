import React from "react";
import { useTranslation } from "react-i18next";

//only for arabic
import { useEffect } from "react";

//updated for arabic
const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },
    { code: "hi", lang: "Hindi" },
    { code: "ar", lang: "Arabic" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    //only added for arabic
    //i18n automatically changes alignment as per lang direction
    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language]);

    return (
        <div className="btn-container">
            {languages.map((lng) => (
                <button key={lng.code} onClick={() => changeLanguage(lng.code)} className={lng.code === i18n.language ? "Selected" : ""} >
                    {lng.lang}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;