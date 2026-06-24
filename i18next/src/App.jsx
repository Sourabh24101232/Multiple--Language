import "./App.css";
import { Trans, useTranslation } from "react-i18next";
import LanguageSelector from "./components/language-selector";

function App() {
  const { t } = useTranslation(); // t is a function
  //const { line1, line2 } = t("description");
  // const { line1, line2 } = t("description",{
  //   channel:"XYZ",
  // });

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      {/* <p>{line1}</p> */}
      <p>
        <Trans
          i18nKey="description.line1"
          values={{ channel: "XYZ" }}
          components={{ 1: <b /> }}
        />
      </p>

      <p>
        <Trans
          i18nKey="description.line2"
          values={{ channel: "XYZ" }}
          components={{ 1: <b /> }}
        />
      </p>
    </div>
  );
}

export default App;