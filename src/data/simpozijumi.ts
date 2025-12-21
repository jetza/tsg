export interface SimpozijumRad {
  title: string;
  file: string;
}

export interface Simpozijum {
  naziv: string;
  godina: string;
  radovi: SimpozijumRad[];
}

export const simpozijumi: Simpozijum[] = [
  {
    naziv: "XV Simpozijum",
    godina: "mart 2016, Soko Banja",
    radovi: [
      {
        title:
          "M. Vujanić K. Lipovac – Od procene do tvrdnje – način izražavanja stavova veštaka pri izradi saobraćajno-tehničkog veštačenja",
        file: "/pdfs/strucna-literatura/XV-simpozijum/01_MVujanic_KLipovac.pdf",
      },
      {
        title:
          "M. B. Stevović – Razgraničenje pravnih i saobraćajno tehničkih pitanja kod opasne situacije",
        file: "/pdfs/strucna-literatura/XV-simpozijum/02_MBStevovic.pdf",
      },
      {
        title:
          "D. Radosavljević – Opasna situacija u saobraćaju kod krivičnih dela ugrožavanja javnog saobraćaja, potreba definicije sa krivično-pravnog aspekta i složene saobraćajne situacije",
        file: "/pdfs/strucna-literatura/XV-simpozijum/03_DRadosavljevic.pdf",
      },
      {
        title:
          "B. Antić M. Vujanić D. Pešić – Metodološki koncept Nalaza i Mišljenja saobraćajno-tehničkog veštaka",
        file: "/pdfs/strucna-literatura/XV-simpozijum/04_BAntic_MVujanic_DPesic.pdf",
      },
      {
        title:
          "R. Dragač – Uticaj grešaka u identifikaciji i obradi tragova saobraćajne nezgode na veštačenje saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/XV-simpozijum/05_RDragac.pdf",
      },
      {
        title:
          "S. Laković – Saobraćajni sudski veštaci u Sloveniji – upravljanje kvalitetom",
        file: "/pdfs/strucna-literatura/XV-simpozijum/06_SLakovic.pdf",
      },
      {
        title:
          "N. Marković M. Vujanić – Mogućnost unapređenja veštačenja primenom rezultata dubinskih analiza",
        file: "/pdfs/strucna-literatura/XV-simpozijum/07_NMarkovic_MVujanic.pdf",
      },
      {
        title: "D. Obradović – Da li je svaki pešak učesnik u saobraćaju?",
        file: "/pdfs/strucna-literatura/XV-simpozijum/08_DObradovic.pdf",
      },
      {
        title:
          "V. Stevanović – Doprinos pešaka za nastanak saobraćajne nezgode kroz primere iz sudske prakse",
        file: "/pdfs/strucna-literatura/XV-simpozijum/09_VStevanovic.pdf",
      },
      {
        title:
          "T. Ivanišević S. Simović Z. Miljanić – Metodologija analize saobraćajne nezgode sudara vozilo – pješak",
        file: "/pdfs/strucna-literatura/XV-simpozijum/10_TIvanisevic_SSimovic_ZMiljanic.pdf",
      },
      {
        title:
          "M. Maslać N. Milutinović M. Božović – Ispitivanje brzina kretanja pešaka na pešačkim površinama i na kolovozu",
        file: "/pdfs/strucna-literatura/XV-simpozijum/11_MMaslac_NMilutinovic_MBozovic.pdf",
      },
      {
        title:
          "V. Vukšić T. Ivanišević – Uloga osiguravajućih društava u unapređenju bezbednosti saobraćaja",
        file: "/pdfs/strucna-literatura/XV-simpozijum/12_VVuksic_TIvanisevic.pdf",
      },
      {
        title:
          "Ž. Ristić M. Ristić – Problemi saobraćajnog veštačenja u osiguranju",
        file: "/pdfs/strucna-literatura/XV-simpozijum/13_ZRistic_MRistic.pdf",
      },
      {
        title:
          "Lj. Sokolić B. Čivčić – Postupak i rokovi za rješavanje odštetnih zahtjeva i pravila o korektnom postupanju pri rješavanju šteta iz osiguranja u svjetlu novog Zakona o obaveznim osiguranjima u saobraćaju u Republici Srpskoj",
        file: "/pdfs/strucna-literatura/XV-simpozijum/14_LJSokolic_BCivcic.pdf",
      },
      {
        title:
          "Z. Šobot Matić Đ. Ćosić – Polivalentne veze u stvaranju atmosfere za ostvarivanje prevara u osiguranju – prepoznavanje",
        file: "/pdfs/strucna-literatura/XV-simpozijum/15_ZSobotMatic_DjCosic.pdf",
      },
      {
        title:
          "M. Vujanić D. Pešić B. Antić E. Smailović – Indikatori pokušaja prevare u osiguranju motornih vozila",
        file: "/pdfs/strucna-literatura/XV-simpozijum/16_MVujanic_DPesic_BAntic_ESmailovic.pdf",
      },
      {
        title:
          "E. Džafić F. Kovačević T. Đurić E. Smailović – Evropski izvještaj o nezgodi, model za prikazivanje ili fingiranje saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/XV-simpozijum/17_EDzafic_FKovacevic_TDjuric_ESmailovic.pdf",
      },
      {
        title:
          "Lj. Koković R. Vujadinović – Primjeri falsifikovanja identifikacionih oznaka ukradenih vozila u cilju prevare osiguravajućih društava",
        file: "/pdfs/strucna-literatura/XV-simpozijum/18_LJKokovic_RVujadinovic.pdf",
      },
      {
        title: "S. Laković – Prevare u osiguranju – slovenački primjeri",
        file: "/pdfs/strucna-literatura/XV-simpozijum/19_SLakovic.pdf",
      },
      {
        title:
          "D. Pešić B. Antić M. Vujanić – Značaj i mogućnosti računarskog programa PC Crash kod veštačenja saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XV-simpozijum/20_DPesic_BAntic_MVujanic.pdf",
      },
      {
        title:
          "D. Pešić E. Smailović T. Petrović M. Milosavljević D. Pešić – Uporedna analiza saobraćajnih nezgoda sa pešacima primenom tradicionalnih metoda i računarskih programa",
        file: "/pdfs/strucna-literatura/XV-simpozijum/21_DPesic_ESmailovic_TPetrovic_MMilosavljevic_DPesic.pdf",
      },
      {
        title:
          "M. Busarčević – Upotreba skenera i računarskog programa Photoshop prilikom veštačenja saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XV-simpozijum/22_MBusarcevic.pdf",
      },
      {
        title:
          "M. Đurković P. Galić – Veštačenje saobraćajnih nezgoda na semaforizovanim raskrsnicama sa snimkom nadzorne kamere bočno u odnosu na smer kretanja vozila",
        file: "/pdfs/strucna-literatura/XV-simpozijum/23_MDjurkovic_PGalic.pdf",
      },
      {
        title: "T. Ivanišević V. Vukšić – Sudari dva ili više vozila",
        file: "/pdfs/strucna-literatura/XV-simpozijum/24_TIvanisevic_VVuksic.pdf",
      },
      {
        title:
          "L. Feher S. Feher – Propusti učesnika u nezgodi dva vozila od kojih je jedno vršilo radnju preticanja a drugo vozilo je vršilo radnju skretanja ulevo",
        file: "/pdfs/strucna-literatura/XV-simpozijum/25_LFeher_SFeher.pdf",
      },
      {
        title:
          "D. Pešić B. Antić J. Davidović – Umor kao uzrok saobraćajnih nezgoda sa učešćem profesionalnih vozača",
        file: "/pdfs/strucna-literatura/XV-simpozijum/26_DPesic_BAntic_JDavidovic.pdf",
      },
      {
        title:
          "M. Rosić A. Pešić M. Božović B. Luković – Profil tipične saobraćajne nezgode u Republici Srbiji u 2014. godini",
        file: "/pdfs/strucna-literatura/XV-simpozijum/27_MRosic_APesic_MBozovic_BLukovic.pdf",
      },
      {
        title:
          "Z. Joševski P. Stefanovski M. Stojmenov Z. Salai – Analiza ponašanja učesnika u saobraćaju prilikom promene pravca kretanja",
        file: "/pdfs/strucna-literatura/XV-simpozijum/28_ZJosevski_PStefanovski_MStojmenov_ZSalai.pdf",
      },
      {
        title:
          "D. Bogićević V. Popović M. Stanković – Primena digitalnih tahografa u postupku izrade vremensko prostorne analize saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/XV-simpozijum/29_DBogicevic_VPopovic_MStankovic.pdf",
      },
      {
        title:
          "M. Čabarkapa – Opasna situacija u saobraćajnim nezgodama u mimoilaženju na kolovozu nedovoljne širine",
        file: "/pdfs/strucna-literatura/XV-simpozijum/30_MCabarkapa.pdf",
      },
      {
        title:
          "F. Kovačević E. Smailović E.Džafić N. Zdravković – Vrednovanje deformacionog rada na vozilima u analizi saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XV-simpozijum/31_FKovacevic_ESmailovic_EDzafic_NZdravkovic.pdf",
      },
      {
        title:
          "M. Čabarkapa – Uloga vještaka u postupku utvrđivanja vrijednosti vozila i visine štete na vozilu",
        file: "/pdfs/strucna-literatura/XV-simpozijum/32_MCabarkapa.pdf",
      },
    ],
  },
  {
    naziv: "XIV Simpozijum",
    godina: "mart 2015, Perućac",
    radovi: [
      {
        title:
          "M. Vujanić K. Lipovac – Od procene do tvrdnje – način izražavanja stavova veštaka pri izradi saobraćajno-tehničkog veštačenja",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/01_MVujanic_KLipovac.pdf",
      },
      {
        title:
          "M. B. Stevović – Razgraničenje pravnih i saobraćajno-tehničkih pitanja kod opasne situacije",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/02_M_B_Stevovic.pdf",
      },
      {
        title:
          "D. Radosavljević – Opasna sitaucija u saobraćaju kod krivičnih dela ugrožavanja javnog saobraćaja",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/03_DRadosavljevic.pdf",
      },
      {
        title:
          "M. Vujanić T. Ivanišević M. Tešić – Vremensko-prostorna analiza saobraćajne nezgode – pristup",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/04_MVujanic_TIvanisevic_MTesic.pdf",
      },
      {
        title:
          "D. Obradović – Bitni elementi za prepoznavanje nasilničke vožnje u analizi saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/05_DObradovic.pdf",
      },
      {
        title:
          "V. Stevanović – Značaj prava prvenstva prolaza za analizu saobraćajne nezgode sa sudskog aspekta",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/06_VStevanovic.pdf",
      },
      {
        title:
          "R. Dragač – Šta uzrokuje pojavu povećanog broja veštačenja koja se osporavaju, ponavljaju i obnavljaju",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/07_RDragac.pdf",
      },
      {
        title:
          "B. Kuzmanoski – Tretman saobraćajne i pravne odgovornosti u veštačenju saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/08_BKuzmanoski.pdf",
      },
      {
        title:
          "I. Bodolo – Regulisanje prednosti prolaska u raskrsnicama i odgovornost učesnika u saobraćaju",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/09_IBodolo.pdf",
      },
      {
        title:
          "F. Kovačević E. Smailović – Karakteristični primjeri saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/10_FKovacevic_ESmailovic.pdf",
      },
      {
        title:
          "M. Vujanić D. Pešić B. Antić J. Davidović – Pregled osnovnih elemenata ekspertiza saobraćajnih nezgoda tipa vozilo-pešak na raskrsnicama",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/11_MVujanic_DPesic_BAntic_JDavidovic.pdf",
      },
      {
        title:
          "D. Pešić B. Antić A. Pešić J. Davidović – Postupak analiza saobraćajnih nezgoda tipa vozilo-pešak na nesemaforisanim raskrsnicama",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/12_DPesic_BAntic_APesic_JDavidovic.pdf",
      },
      {
        title:
          "N. Marković M. M. Vujanić E. Smailović – Vremensko-prostorna analiza saobraćajne nezgode u raskrsnici",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/13_NMarkovic_M_M_Vujanic_ESmailovic.pdf",
      },
      {
        title:
          "Z. Papić V. Bogdanović S. Kostić N. Saulić – Uticaj saobraćajne signalizacije na nastanak saobraćajnih nezgoda u zoni raskrsnica",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/14_ZPapic_VBogdanovic_SKostic_NSaulic.pdf",
      },
      {
        title:
          "B. Kostić T. Petrović T. Ivanišević V. Vukšić – Nastanak opasne situacije zbog neadekvatne saobraćajne signalizacije",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/15_BKostic_TPetrovic_TIvanisevic_VVuksic.pdf",
      },
      {
        title:
          "M. Čabarkapa – Opasna situacija u saobraćajnim nezgodama sudara vozila u kružnoj raskrsnici",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/16_MCabarkapa.pdf",
      },
      {
        title:
          "S. Simović Z. Miljanić – Analiza karakteristika ubrzavanja vozila",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/17_SSimovic_ZMiljanic.pdf",
      },
      {
        title:
          "D. Bogićević S. Kostić M. Stanković – Ubrzanje putničkih automobila prilikom saobraćajnih nezgoda na raskrsnicama",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/18_DBogicevic_SKostic_MStankovic.pdf",
      },
      {
        title:
          "S. Kostić Z. Papić M. Simenunović N. Saulić – Propuštanje vozila na raskrsnici pri skretanju u levo",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/19_SKostic_ZPapic_MSimeunovic_NSaulic.pdf",
      },
      {
        title:
          "O. Lindov A. Omerhodžić A. Alikadić A. Tatarević – Dokazivanje nastanka saobraćajne nezgode na nestandardnim raskrsnicama",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/20_OLindov_AOmerhodzic_AAlikadic_ATatarevic.pdf",
      },
      {
        title:
          "V. Bogdanović N. Ruškić Z. Papić N. Garunović – Uslovi odvijanja saobraćaja na nestandardnim nesignalisanim raskrsnicama",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/21_VBogdanovic_NRuskic_ZPapic_NGarunovic.pdf",
      },
      {
        title:
          "T. Ivanišević Z. Miljanić – Zaštitna ograda – propust odgovornih lica i nadležnih radnih organizacija?",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/22_TIvanisevic_ZMiljanic.pdf",
      },
      {
        title:
          "D. Pešić D. Kukić M. Rosić T. Ivanišević – Značaj parametra vidljivosti kod pešaka i biciklista",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/23_DPesic_DKukic_MRosic_TIvanisevic.pdf",
      },
      {
        title:
          "B. Antić D. Pešić M. Vujanić – Uticaj mase i tipa vozila na daljinu odbačaja pešaka",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/24_BAntic_DPesic_MVujanic.pdf",
      },
      {
        title:
          "R. Mijailović M. Vujanić M. Cvijan – Metoda za određivanje brzina vozila u slučaju centralnog čeonog sudara",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/25_RMijailovic_MVujanic_MCvijan.pdf",
      },
      {
        title:
          "N. Milutinović V. Erac Z. Jelić – Postupak određivanja brzina vozila kod sudara u raskrsnicama",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/26_NMilutinovic_VErac_ZJelic.pdf",
      },
      {
        title:
          "R. Mijailović – Metodologija za određivanje koeficijenta restitucije za slučaj čeonog sudara vozila",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/27_RMijailovic.pdf",
      },
      {
        title:
          "N. Milutinović M. Maslać – Model ravanske mehanike sudara vozila",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/28_NMilutinovic_MMaslac.pdf",
      },
      {
        title:
          "N. Marković D. Pešić M. Šelmić D. Macura – Značaj vršenja dubinskih analiza saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/29_NMarkovic_DPesic_MSelmic_DMacura.pdf",
      },
      {
        title:
          "P. Galić – Utvrđivanje uticaja tehničke neispravnosti vozila na nastanak saobraćajne nezgode i ocenu odgovornosti",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/30_PGalic.pdf",
      },
      {
        title:
          "P. Stefanovski Z. Joševski V. Nikolov A. Hristovski – Prevare u osiguranju sa učešćem procenitelja",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/31_PStefanovski_ZJosevski_VNikolov_AHristovski.pdf",
      },
      {
        title:
          "T. Đurić D. Dujaković E. Džafić – Utvrđivanje obima šteta na vozilima",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/32_TDjuric_DDujakovic_EDzafic.pdf",
      },
      {
        title:
          "Ž. Ristić D. Stošić – Dokazi u spisu koji mogu dovesti u zabludu organizacije za osiguranje",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/33_ZRistic_DStosic.pdf",
      },
      {
        title:
          "T. Đurić M. Tešić B. Marić – Uticaj analize oštećenja vozila na nalaz i mišljenje veštaka",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/34_TDjuric_MTesic_BMaric.pdf",
      },
      {
        title:
          "B. Milić – Fizičko-hemijsko vještačenje tragova saobraćajne nezgode – dokaz u krivičnom postupku",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/35_BMilic.pdf",
      },
      {
        title:
          "D. Nedić – Trzajna povreda vrata – prevaziđeni koncept liječenja imobilizacijom",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/36_DNedic.pdf",
      },
      {
        title:
          "M. Đurković – Analiza saobraćajnih nezgoda na semaforizovanim raskrsnicama sa ili bez snimka video nadzora",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/37_MDjurkovic.pdf",
      },
      {
        title:
          "D. Kukić J. Milošević M. Rosić M. Božović – Uporedna analiza osnovnih obeležja saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/38_DKukic_JMilosevic_MRosic_MBozovic.pdf",
      },
      {
        title: "N. Pupavac – Procena vrednosti plutajućeg objekta",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/39_NPupavac.pdf",
      },
      {
        title:
          "B. Davidović – Transportno osiguranje kao instrument zaštite učesnika u međunarodnom drumskom transportu",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/40_BDavidovic.pdf",
      },
      {
        title:
          "V. Vukšić B. Kostić V. Jevtić – Prikaz tipičnih situacija stradanja biciklista",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/41_VVuksic_BKostic_VJevtic.pdf",
      },
      {
        title: "N. Pupavac – Analiza prevrtanja čamca (3.4×1.5×0.53)m",
        file: "/pdfs/strucna-literatura/XIV-simpozijum/42_NPupavac.pdf",
      },
    ],
  },
  {
    naziv: "XIII Simpozijum",
    godina: "novembar 2014, Divčibare",
    radovi: [
      {
        title:
          "M. B. Stevović – Razgraničenje pravnih i saobraćajno-tehničkih pitanja kod opasne situacije",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/02_-M_B_Stevovic-XIII-Simpozijum.pdf",
      },
      {
        title: "D. Obradović – Uviđaj saobraćajnih nezgoda sa učešćem pešaka",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/04_-D_Obradovic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "V. Stevanović – Propusti na strani pešaka – uzrok saobraćajne nezgode u praksi apelacionog suda u Nišu",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/05_-V_Stevanovic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "M. Vujanić B. Antić – Specifičnosti analize saobraćajnih nezgoda vozilo-pešak",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/06_-M_Vujanic_B_Antic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "E. Džafić T. Đurić G. Milošević – Sudar sa Pješakom i odbačaj pješaka unaprijed ili na drugo vozilo",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/07_-E_Dzafic_T_Djuric_G_Milosevic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "Z. Miljanić S. Simović – Metodologija analize saobraćajne nezgode sudara vozilo-pješak",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/08_-Z_Miljanic_S_Simovic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "F. Kovacevic E. Smailovic – Karakteristični primjeri analiza saobraćajnih nezgoda tipa vozilo-pješak",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/F_Kovacevic_E_Smailovic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "D. Pešić E. Smailovic – Uporedna analiza saobraćajnih nezgoda sa pešacima primenom tradicionalnih metoda i programa PC Crash",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/10_-D_Pesic_E_Smilovic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "B. Antić D. Pešić N. Marković – Uporedna analiza saobraćajnih nezgoda sa pešacima primenom tradicionalnih metoda",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/11_-B_Antic_D_Pesic_N_Markovic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "I. Bodolo – Prvenstvo prolaza pešaka u odnosu na vozila na obeleženom pešačkom prelazu",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/12_-I_Bodolo-XIII-Simpozijum.pdf",
      },
      {
        title:
          "M. Čabarkapa – Opasna situacija u saobraćajnim nezgodama sa učešćem pješaka, u neosvijetljenom tunelu",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/13_-M_Cabarkapa-XIII-Simpozijum.pdf",
      },
      {
        title:
          "N. Milutinović M. Maslać – Modelovanje sudarnog položaja pešaka i utvrđivanje brzine pešaka u trenutku sudara",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/14_-N_Milutinovic_M_Maslac-XIII-Simpozijum.pdf",
      },
      {
        title:
          "V. Bogdanović Z. Papić N. Ruškić – Analiza saobraćajnih nezogda sa pešacima na signalisanim raskrsnicama",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/15_-V_Bogdanovic_Z_Papic_N_Ruskic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "P. Stefanovski Z. Joševski V. Dančevska I. Cvetanovski – Propusti učesnika saobraćajnih nezgoda sa decom pešacima",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/16_-P_Stefanovski_Z_Josevski_V_Dancevska_I_Cvetanovski-XIII-Simpozijum.pdf",
      },
      {
        title:
          "Z. Joševski S. Zlatkovski P. Stefanovski M. Stojmenov – Mogućnosti uočavanja pešaka noću u fazi mimoilaženja",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/17_-Z_Josevski_S_Zlatkovski_P_Stefanovski_M_Stojmenov-XIII-Simpozijum.pdf",
      },
      {
        title:
          "M. Cvijan M. Vujanić M. Cerović – Specifičnosti analize saobraćajnih nezgoda tipa vozilo-pešak",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/18_-M_Cvijan_M_Vujanic_M_Cerovic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "M. Vujanić T. Ivanišević – Nastanak opasne situacije u slučaju sudara vozila i pešaka",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/19_-M_Vujanic_T_Ivanisevic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "N. Marković V. Simidžija T. Ivanišević – Verodostojnost nastanka saobraćajne nezgode (pokušaji prevara u osiguranju)",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/20_-N_Markovic_V_Simidzija_T_Ivanisevic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "N. Marković E. Smailović T. Ivanišević M. Rosić – Utvrđivanje mesta sudara primenom softverskog alata PC Crash",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/21_-N_Markovic_E_Smailovic_T_Ivanisevic_M_Rosic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "B. Antić M. Cvijan T. Ivanišević – Uticaj analize povreda pešaka i oštećenja vozila na nalaz i mišljenje veštaka",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/22_-B_Antic_M_Cvijan_T_Ivanisevic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "D. Pešić M. Cerović – Sistematizacija propusta učesnika u nezgodama u kojima je došlo do gaženja pešaka",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/23_-D_Pesic_M_Cerovic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "R. Mijailović M. Cvijan – Krutosti čeonog dela vozila kao funkcije trajnih deformacija",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/24_-R_Mijailovic_M_Cvijan-XIII-Simpozijum.pdf",
      },
      {
        title:
          "Ž. Ristic D. Stošić – Karakteristični modeli nameštenih saobraćajnih nezgoda iz prakse osiguranja",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/25_-Z_Ristic_D_Stosic-XIII-Simpozijum.pdf",
      },
      {
        title:
          "A. Đoković Ž. Ristić – Nove tendencije u sprečavanju prevara nastalih u osiguranju motornih vozila",
        file: "/pdfs/strucna-literatura/XIII-simpozijum/26_-A_Djokovic_Z_Ristic-XIII-Simpozijum.pdf",
      },
    ],
  },
  {
    naziv: "XII Simpozijum",
    godina: "oktobar 2013, Divčibare",
    radovi: [
      {
        title:
          "M. Čabarkapa – Hipoteze u vještačenju saobraćajnih nezgoda sa odronom na putu",
        file: "/pdfs/strucna-literatura/XII-simpozijum/17_-M_-Cabarkapa-XII-Simpozijum.pdf",
      },
      {
        title:
          "M. Vujanić K. Lipovac – Od procene do tvrdnje – Način izražavanja stavova veštaka",
        file: "/pdfs/strucna-literatura/XII-simpozijum/1_-M_-Vujanic_K_-Lipovac-XII-Simpozijum.pdf",
      },
      {
        title:
          "D. Okanović M. Cvijan – Veštačenje u zakoniku o krivičnom postupku",
        file: "/pdfs/strucna-literatura/XII-simpozijum/2_-D_-Okanovic_M_-Cvijan-XII-Simpozijum.pdf",
      },
      {
        title:
          "V. Stevanović – Propust upravljača puta – uzrok saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/XII-simpozijum/4_-V_-Stevanovic-XII-Simpozijum.pdf",
      },
      {
        title:
          "N. Marković E. Smailović – Pravilno definisanje ograničenja brzine",
        file: "/pdfs/strucna-literatura/XII-simpozijum/5_-N_-Markovic_E_-Smailovic-XII-Simpozijum.pdf",
      },
      {
        title:
          "D. Pešić M. Vujanić – Značaj utvrđivanja i metode merenja radijusa krivine",
        file: "/pdfs/strucna-literatura/XII-simpozijum/6_-D_-Pesic_M_-Vujanic-XII-Simpozijum.pdf",
      },
      {
        title:
          "M. Tešić – Uticaj grešaka prilikom uviđaja saobraćajnih nezgoda na nalaz i mišljenje veštaka",
        file: "/pdfs/strucna-literatura/XII-simpozijum/7_-M_-Tesic-XII-Simpozijum.pdf",
      },
      {
        title:
          "N. Milutinović – Generisanje trodimenzionalnih modela mesta saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/XII-simpozijum/8_-N_-Milutinovic-XII-Simpozijum.pdf",
      },
      {
        title:
          "N. Milutinović M. Vujanić – Novine u softverskim alatima za analizu saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XII-simpozijum/9_-N_-Milutinovic_M_-Vujanic-XII-Simpozijum.pdf",
      },
      {
        title:
          "B. Antić M. Vujanić – Analiza mogućnosti izbegavanja sudara sa preprekama",
        file: "/pdfs/strucna-literatura/XII-simpozijum/10_-B_-Antic_M_-Vujanic-XII-Simpozijum.pdf",
      },
      {
        title:
          "D. Pešić M. Cerović – Sistematizacija propusta učesnika nezgode",
        file: "/pdfs/strucna-literatura/XII-simpozijum/11_-D_-Pesic_M_-Cerovic-XII-Simpozijum.pdf",
      },
      {
        title:
          "M. Božović T. Ivanišević T. Petrović – Saobraćajne nezgode u zoni radova na putu",
        file: "/pdfs/strucna-literatura/XII-simpozijum/12_-M_-Bozovic_T_-Ivanisevic_T_-Petrovic-XII-Simpozijum.pdf",
      },
      {
        title:
          "B. Antić – Razvoj vremensko-prostorne analize i značaj za kvalitet nalaza",
        file: "/pdfs/strucna-literatura/XII-simpozijum/13_-B_-Antic-XII-Simpozijum.pdf",
      },
      {
        title:
          "N. Marković D. Pešić M. Vujanić – Analiza saobraćajnih nezgoda na putno-pružnim prelazima",
        file: "/pdfs/strucna-literatura/XII-simpozijum/14_-N_-Markovic_D_-Pesic_M_-Vujanic-XII-Simpozijum.pdf",
      },
      {
        title:
          "E. Smailović M. Cvijan – Uporedna analiza tradicionalnih i savremenih načina analize",
        file: "/pdfs/strucna-literatura/XII-simpozijum/15_-E_-Smailovic_M_-Cvijan-XII-Simpozijum.pdf",
      },
      {
        title:
          "D. Pešić M. Rosić T. Ivanišević – Definisanje propusta za nastanak saobraćajnih nezgoda sa učešćem životinja",
        file: "/pdfs/strucna-literatura/XII-simpozijum/16_-D_-Pesic_M_-Rosic_T_-Ivanisevic-XII-Simpozijum.pdf",
      },
      {
        title:
          "D. Pešić A. Trifunović V. Vožni – Zakonska odgovornost u slučaju sudara vozila i pešaka na auto-putu",
        file: "/pdfs/strucna-literatura/XII-simpozijum/18_-D_-Pesic_A_-Trifunovic_V_-Vozni-XII-Simpozijum.pdf",
      },
      {
        title:
          "B. Kostić – Veštačenje i identifikovanje propusta učesnika u saobraćajnoj nezgodi",
        file: "/pdfs/strucna-literatura/XII-simpozijum/19_-B_-Kostic_T_-Ivanisevic-XII-Simpozijum.pdf",
      },
      {
        title:
          "D. Obradović – Ljudski faktor – preduslov za sprečavanje prevara u osiguranju",
        file: "/pdfs/strucna-literatura/XII-simpozijum/20_-D_-Obradovic-XII-Simpozijum.pdf",
      },
      {
        title:
          "I. Radojević D. Mugoša Z. Milić – Značaj vještačenja pri dokazivanju prevara u osiguranju",
        file: "/pdfs/strucna-literatura/XII-simpozijum/21_-I_-Radojevic_D_-Mugosa_Z_-Milic-XII-Simpozijum.pdf",
      },
      {
        title: "D. Pišić – Pokušaj osiguraničke prevare – primeri iz prakse",
        file: "/pdfs/strucna-literatura/XII-simpozijum/22_-D_-Pisic-XII-Simpozijum.pdf",
      },
      {
        title:
          "Z. Miljanić S. Simović – Uticaj nekih od grešaka puta i upravljača puta na nastanak saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XII-simpozijum/23_-Z_-Miljanic_S_-Simovic-XII-Simpozijum.pdf",
      },
      {
        title: "B. Sekulić – Kvalitetan pristup postupku procene štete",
        file: "/pdfs/strucna-literatura/XII-simpozijum/24_-B_-Sekulic-XII-Simpozijum.pdf",
      },
      {
        title:
          "F. Kovačević E. Hadžić A. Imamović – Kompatibilnost sudarnog procesa vozila",
        file: "/pdfs/strucna-literatura/XII-simpozijum/25_-F_-Kovacevic_E-Hadzic_A-Imamovic-XII-Simpozijum.pdf",
      },
      {
        title:
          "O. Lindov A. Omerhodžić A. Tatarević – Problematika dokazivanja nelogičnih i nerealnih elemenata",
        file: "/pdfs/strucna-literatura/XII-simpozijum/26_-O_-Lindov_A-Omerhodzic_A-Tatarevic-XII-Simpozijum.pdf",
      },
      {
        title: "Ž. Ristić A. Đoković – Prevare u osiguranju u republici Srbiji",
        file: "/pdfs/strucna-literatura/XII-simpozijum/27_-Z_-Ristic_A_-Djokovic-XII-Simpozijum.pdf",
      },
      {
        title:
          "P. Stefanovski V. Dančevska I. Cvetanovski B. Murgoski – Prilog istraživanju prevara u osiguranju",
        file: "/pdfs/strucna-literatura/XII-simpozijum/28_-P_-Stefanovski_V_-Dancevska_I-Cvetanovski_B-Murgoski-XII-Simpozijum.pdf",
      },
      {
        title:
          "E. Džafić G. Milošević – Postupak i način utvrđivanja izgubljene dobiti",
        file: "/pdfs/strucna-literatura/XII-simpozijum/29_-E_-Dzafic_G_-Milosevic-XII-Simpozijum.pdf",
      },
      {
        title:
          "S. Kostić V. Popović N. Saulić A. Jovanović – Određivanje bezbedne brzine na putevima",
        file: "/pdfs/strucna-literatura/XII-simpozijum/30_-S_-Kostic_V_-Popovic_N_-Saulic_A_-Jovanovic-XII-Simpozijum.pdf",
      },
      {
        title: "Đ. Vranješ B. Miletić – Dubinske analize saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XII-simpozijum/31_-Dj_-Vranjes_B_-Miletic-XII-Simpozijum.pdf",
      },
    ],
  },
  {
    naziv: "XI Simpozijum",
    godina: "april 2012, Zlatibor",
    radovi: [
      {
        title:
          "D. Radosavljević – Saobraćajno-tehničko veštačenje, veštak i stručni savetnik kroz novi zakon",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Saobracajno-tehnicko-vestacenje-vestak-i-strucni-savetnik-kroz-novi-zakon-o-krivicnom-postupku-u-Republici-Srbiji-1.pdf",
      },
      {
        title:
          "D. Obradović – Značaj pojedinih novih pravnih propisa za saobraćajno-tehničko veštačenje",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Znacaj-pojedinih-novih-pravnih-propisa-za-saobracajno-tehnicko-vestacenje.pdf",
      },
      {
        title:
          "M. Vujanić D. Obradović M. Božović – Domen rada veštaka saobraćajno-tehničke struke",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Domen-rada-vestaka-saobracajno-tehnicke-struke.pdf",
      },
      {
        title:
          "M. B. Stevović – Razgraničenje pravnih i saobraćajno-tehničkih pitanja kod opasne situacije",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Razgranicenje-pravnih-i-saobracajno-tehnickih-pitanja-kod-opasne-situacije.pdf",
      },
      {
        title:
          "V. Stevanović – Pravno pitanje i saobraćajno-tehničko pitanje u sudskoj praksi",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Pravno-pitanje-i-saobracajno-tehnicko-pitanje-u-sudskoj-praksi.pdf",
      },
      {
        title:
          "S. Kostić Z. Papić V. Bogdanović N. Šaulić – Analiza radnji u saobraćaju koje dovode do opasne situacije",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Analiza-radnji-u-saobracaju-koje-dovode-do-opasne-situacije.pdf",
      },
      {
        title:
          "N. Marković D. Pešić – Opasna situacija i nastanak saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Opasna-situacija-i-nastanak-saobracajne-nezgode.pdf",
      },
      {
        title:
          "B. Antić D. Pešić – Pokušaj unapređenja metoda analize mogućnosti izbegavanja bočnih sudara",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Pokusaj-unapredjenja-metoda-analize-mogucnosti-izbegavanja-bocnih-sudara-u-sustizanju.pdf",
      },
      {
        title:
          "D. Pešić N. Marković – Značaj određivanja vidljivosti za analizu saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Znacaj-odredjivanja-vidljivosti-za-analizu-saobracajne-nezgode.pdf",
      },
      {
        title:
          "V. Bogdanović Z. Papić S. Kostić N. Ruškić – Karakteristike saobraćajnih nezgoda sa učešćem transportnih sastava",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Karakteristike-saobracajnih-nezgoda-sa-ucescem-transportnih-sastava.pdf",
      },
      {
        title:
          "D. Pešić B. Antić – Saobraćajne nezgode na semaforizovanim raskrsnicama",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Saobracajne-nezgode-na-semaforizovanim-raskrsnicama-postupak-izrade-nalaza-i-misljenja-i-definisanje-uzroka-okolnosti-i-propusta.pdf",
      },
      {
        title:
          "M. Cvijan M. Trifunović – Značaj fotografisanja za analizu saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Znacaj-fotografisanja-za-analizu-saobracajnih-nezgoda.pdf",
      },
      {
        title:
          "M. Tešić N. Gogić – Preporuke za primenu sistema merenja na licu mesta",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Preporuke-za-primenu-sistema-merenja-na-licu-mesta-saobracajne-nezgode.pdf",
      },
      {
        title:
          "M. Vujanić N. Milutinović – Primena savremenih softverskih alata za analizu saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Primena-savremenih-softverskih-alata-za-analizu-saobracajnih-nezgoda.pdf",
      },
      {
        title:
          "D. Bogićević S. Kostić M. Stanković – Značaj korišćenja rezultata kreš testova",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Znacaj-koriscenja-rezultata-kres-testova-prilikom-ekspertize-saobracajnih-nezgoda.pdf",
      },
      {
        title:
          "M. Cvijan E. Smailović – Prepoznavanje pokušaja prevare u osiguranju",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Prepoznavanje-pokusaja-prevare-u-osiguranju.pdf",
      },
      {
        title:
          "Ž. Ristić – Nastanak i mogucnosti suzbijanja prevara u osiguranju",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Nastanak-i-mogucnosti-suzbijanja-prevara-u-osiguranju-sa-posebnim-akcentom-na-osiguranje-motornih-vozila.pdf",
      },
      {
        title:
          "M. Božović Z. Knežević D. Simić – Modeli saradnje subjekata u cilju sprečavanja prevara",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Modeli-saradnje-subjekata-u-cilju-sprecavanja-prevara-u-osiguranju.pdf",
      },
      {
        title: "M. Marinković – Prestanak važenja međunarodne karte osiguranja",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Prestanak-vazenja-medjunarodne-karte-osiguranja.pdf",
      },
      {
        title:
          "V. Piščević – Trzajna povreda vrata i njen aspekt na procenu umanjenja životne aktivnosti",
        file: "/pdfs/strucna-literatura/XI-simpozijum/Trzajna-povreda-vrata-i-njen-aspekt-na-procenu-umanjenja-zivotne-aktivnosti.pdf",
      },
      {
        title: "M. B. Stevović – Kompletan dodatak",
        file: "/pdfs/strucna-literatura/XI-simpozijum/KOMPLETAN-DODATAK.pdf",
      },
    ],
  },
  {
    naziv: "X Simpozijum",
    godina: "novembar 2011, Zlatibor",
    radovi: [
      {
        title: "M. Vujanić K. Lipovac – Od procene do tvrdnje",
        file: "/pdfs/strucna-literatura/X-simpozijum/Od-procene-do-tvrdnje-nacin-izrazavanja-stavova-vestaka-pri-izradi-saobracajno-tehnickog-vestacenja.pdf",
      },
      {
        title:
          "D. Radosavljević – Opasna situacija u saobraćaju kod krivičnih dela ugrožavanja javnog saobraćaja",
        file: "/pdfs/strucna-literatura/X-simpozijum/Opasna-situacija-u-saobracaju-kod-krivicnih-dela-ugrozavanja-javnog-saobracaja-potreba-definicije-sa-krivicno-pravnog-aspekta-i-slozene-saobracajne-situacije.pdf",
      },
      {
        title:
          "M. B. Stevović – Odgovornost preduzeća za puteve i drugih subjekata",
        file: "/pdfs/strucna-literatura/X-simpozijum/Odgovornost-preduzeca-za-puteve-i-drugih-subjekata-koji-nisu-ucesnici-u-saobracaju-u-svetlu-uzroka-saobracajnih-nezgoda-i-greske-puta-na-njihov-nastanak.pdf",
      },
      {
        title:
          "S. Kostić N. Ruškić N. Saulić – Opasne situacije nastale prilikom preduzimanja radnji",
        file: "/pdfs/strucna-literatura/X-simpozijum/Opasne-situacije-nastale-prilikom-preduzimanja-radnji-kao-uzrok-slozenih-saobracajnih-nezgoda.pdf",
      },
      {
        title:
          "D. Pešić A. Radović – Izračunavanje usporenja na tehničkom pregledu",
        file: "/pdfs/strucna-literatura/X-simpozijum/Izracunavanje-usporenja-na-tehnickom-pregledu.pdf",
      },
      {
        title:
          "D. Pešić M. M. Vujanić – Uticaj usporenja vozila na mogućnost izbegavanja saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/X-simpozijum/Uticaj-usporenja-vozila-na-mogucnost-izbegavanja-saobracajne-nezgode.pdf",
      },
      {
        title:
          "N. Marković D. Pešić B. Antić – Posebni slučajevi uticaja neispravnosti vozila",
        file: "/pdfs/strucna-literatura/X-simpozijum/Posebni-slucajevi-uticaja-neispravnosti-vozila-na-saobracajnu-nezgodu.pdf",
      },
      {
        title: "M. Vujanić D. Pešić – Složene saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/X-simpozijum/Slozene-saobracajne-nezgode.pdf",
      },
      {
        title:
          "B. Antić M. M. Vujanić – Sudari u sustizanju – vremensko prostorna analiza",
        file: "/pdfs/strucna-literatura/X-simpozijum/Sudari-u-sustizanju-vremensko-prostorna-analiza.pdf",
      },
      {
        title:
          "Z. Papić S. Kostić V. Bogdanović – Izbegavanje naleta na prepreku bočnim izmicanjem",
        file: "/pdfs/strucna-literatura/X-simpozijum/Izbegavanje-naleta-na-prepreku-bocnim-izmicanjem-novi-pristup.pdf",
      },
      {
        title:
          "D. Pešić M. Trifunović – Uticaj brzine na mogućnost izbegavanja nezgode",
        file: "/pdfs/strucna-literatura/X-simpozijum/Uticaj-brzine-na-mogucnost-izbegavanja-nezgode.pdf",
      },
      {
        title:
          "M. Nešić K. Lipovac S. Malešić – Savremeno vršenje uviđaja saobraćajnih nezgoda",
        file: "/pdfs/strucna-literatura/X-simpozijum/Savremeno-vrsenje-uvidjaja-saobracajnih-nezgoda-u-funkciji-unapredjenja-analize-saobracajne-nezgode-1.pdf",
      },
      {
        title:
          "N. Marković D. Pešić – Posebni slučajevi uticaja preglednosti puta",
        file: "/pdfs/strucna-literatura/X-simpozijum/Posebni-slucajevi-uticaja-preglednosti-puta-na-nastanak-saobracajne-nezgode.pdf",
      },
      {
        title:
          "M. Vujanić T. Đurić M. Cvijan – Provera verodostojnosti nastanka štetnog događaja",
        file: "/pdfs/strucna-literatura/X-simpozijum/Provera-verodostojnosti-nastanka-stetnog-dogadjaja.pdf",
      },
      {
        title:
          "M. Božović M. Trifunović E. Smailović – Specifični slučajevi prevara u osiguranju",
        file: "/pdfs/strucna-literatura/X-simpozijum/Specificni-slucajevi-prevara-u-osiguranju.pdf",
      },
      {
        title:
          "M. Božović V. Barović M. Milošević – Pokušaji prevara u osiguranju",
        file: "/pdfs/strucna-literatura/X-simpozijum/Pokusaji-prevara-u-osiguranju1.pdf",
      },
      {
        title:
          "M. Došlić M. Gordić B. Kovačević – Provera i zaštita identiteta vozila",
        file: "/pdfs/strucna-literatura/X-simpozijum/Provera-i-zastita-identiteta-vozila.pdf",
      },
    ],
  },
  {
    naziv: "IX Simpozijum",
    godina: "novembar 2010, Zlatibor",
    radovi: [
      {
        title:
          "N. Marković D. Okanović B. Antić – Stvaranje opasne situacije stupanjem pešaka sa leve strane",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Stvaranje-opasne-situacije-stupanjem-pesaka-sa-leve-strane.pdf",
      },
      {
        title:
          "D. Pešić B. Antić M. M. Vujanić – Stvaranje opasnosti od strane poljoprivrednih mašina",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Stvaranje-opasnosti-od-strane-poljoprivrednih-masina-u-nocnim-uslovima.pdf",
      },
      {
        title:
          "M. M. Vujanić D. Pešić V. Barović – Nastanak opasne situacije zbog nedostatka saobraćajne signalizacije",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Nastanak-opasne-situacije-zbog-nedostatka-nepravilnosti-saobracajne-signalizacije.pdf",
      },
      {
        title:
          "V. Bogdanović S. Kostić Z. Papić N. Ruškić – Postupak utvrđivanja opasne saobraćajne situacije",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Postupak-utvrdjivanja-opasne-saobracajne-situacije-na-prioritetnim-raskrsnicama.pdf",
      },
      {
        title:
          "M. Stevović – Pravni i saobraćajno-tehnički aspekti opasne situacije",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Pravni-i-saobracajno-tehnicki-aspekti-opasne-situacije-kod-krivicnih-dela-ugrozavanja-bezbednosti-javnog-saobracaja.pdf",
      },
      {
        title:
          "D. Pešić N. Marković B. Nićiforović – Obaveze i propusti učesnika saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Obaveze-i-propusti-ucesnika-saobracajne-nezgode.pdf",
      },
      {
        title:
          "M. Cvijan D. Pešić A. Radović – Zakonska regulativa za izradu veštačenja",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Zakonska-regulativa-za-izradu-vestacenja.pdf",
      },
      {
        title:
          "D. Obradović – Pravni osnov za saobraćajno veštačenje u krivičnim postupcima",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Pravni-osnov-za-saobracajno-vestacenje-u-krivicnim-postupcima-u-republici-Srbiji-sadasnje-stanje-i-nove-tendencije.pdf",
      },
      {
        title: "S. Kostić – Novine u zakonskoj regulativi o veštačenju",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Novine-u-zakonskoj-regulativi-o-vestacenju.pdf",
      },
      {
        title: "M. Vujanić K. Lipovac – Od procene do tvrdnje",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Od-procene-do-tvrdnje-nacin-izrazavanja-stavova-vestaka-pri-izradi-saobracajno-tehnickog-vestacenja1.pdf",
      },
      {
        title:
          "Z. Papić S. Kostić V. Bogdanović N. Ruškić – Kolizija vozila u preticanju sa vozilom u levom skretanju",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Kolizija-vozila-u-preticanju-sa-vozilom-u-levom-skretanju.pdf",
      },
      {
        title:
          "M. Vujanić D. Okanović M. Božović – Nastanak opasne situacije, pojam i definisanje graničnih slučajeva",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Nastanak-opasne-situacije-pojam-i-definisanje-granicnih-slucajeva.pdf",
      },
      {
        title:
          "M. Eskić M. Božović N. Marković – Analiza verodostojnosti tragova",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Analiza-verodostojnosti-tragova.pdf",
      },
      {
        title:
          "M. Vujanić D. Okanović M. Božović D. Pešić – Naselje i naseljeno mesto",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Naselje-i-naseljeno-mesto.pdf",
      },
      {
        title:
          "B. Antić M. M. Vujanić A. Pavlović – Analiza verodostojnosti nastanka saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Analiza-verodostojnosti-nastanka-saobracajne-nezgode.pdf",
      },
      {
        title:
          "Ž. Ristić B. Pavlović M. Ristić – Neki aspekti prevara u osiguranju motornih vozila",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Neki-aspekti-prevara-u-osiguranju-motornih-vozila.pdf",
      },
      {
        title:
          "Z. Miljanić M. Vujanić – Analiza načina proračuna materijalne štete",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Analiza-nacina-proracuna-materijalne-stete.pdf",
      },
      {
        title:
          "M. Vujanić M. Eskić M. Božović – Mogućnost uporedne analize primenom softverskog alata PC Crash",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Mogucnost-uporedne-analize-primenom-softverskog-alata-PC-Crash-i-tragova-fiksiranih-uvidjajnom-dokumentacijom.pdf",
      },
      {
        title:
          "V. Jevtić D. Vuković – Analiza stanja bezbednosti vozača dvotočkaša",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Analiza-stanja-bezbednosti-vozaca-dvotockasa-i-uticaj-iznenadne-i-opasne-situacije-na-bezbednost-ovih-ucesnika-u-saobracaju.pdf",
      },
      {
        title:
          "I. Radojević N. Marković – Pokušaji prevara u osiguranju motornih vozila",
        file: "/pdfs/strucna-literatura/IX-simpozijum/Pokusaji-prevara-u-osiguranju-motornih-vozila-u-drumskom-saobracaju-prikaz-slucajeva.pdf",
      },
    ],
  },
  {
    naziv: "VIII Simpozijum",
    godina: "novembar 2009, Vrnjačka Banja",
    radovi: [
      {
        title:
          "N. Marković M. M. Vujanić M. Cvijan – Uticaj analize oštećenja na nalaz i mišljenje veštaka",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Uticaj-analize-ostecenja-na-nalaz-i-misljenje-vestaka-u-sudaru-vozila-i-pesaka.pdf",
      },
      {
        title:
          "M. Busarčević – Značaj tragova za otkrivanje i identifikaciju vozila",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Znacaj-tragova-za-otkrivanje-i-identifikaciju-vozila-kojim-se-vozac-udaljio-sa-mesta-saobracajne-nezgode-posle-sudara-sa-pesakom.pdf",
      },
      {
        title:
          "M. Božović N. Marković D. Pešić – Uticaj analize tragova na nalaz i mišljenje veštaka",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Uticaj-analize-tragova-na-nalaz-i-misljenje-vestaka.pdf",
      },
      {
        title:
          "D. Pešić N. Marković – Specifični slučajevi uticaja analize povreda pešaka",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Specificni-slucajevi-uticaja-analize-povreda-pesaka-na-nalaz-i-misljenje-vestaka.pdf",
      },
      {
        title:
          "M. M. Vujanić D. Pešić M. Božović – Uticaj analize povreda pešaka na nalaz i mišljenje veštaka",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Uticaj-analize-povreda-pesaka-na-nalaz-i-misljenje-vestaka.pdf",
      },
      {
        title:
          "S. Kostić M. Vujanić – Struktura i koncept vremensko-prostorne analize",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Struktura-i-koncept-vremensko-prostorne-analize-saobracajnih-nezgoda-vozila-sa-pesakom.pdf",
      },
      {
        title:
          "B. Antić M. M. Vujanić M. Cvijan – Analiza i razlika vremenske i prostorne baze analize",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Analiza-i-razlika-vremenske-i-prostorne-baze-analize-saobracajnih-nezgoda-sa-pesacima.pdf",
      },
      {
        title:
          "D. Pešić M. Božović – Vremensko-prostorna analiza saobraćajnih nezgoda tipa vozilo-pešak",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Vremensko-prostorna-analiza-saobracajnih-nezgoda-tipa-vozilo-pesak-specificni-slucajevi-nezgoda-sa-starim-licima-i-decom.pdf",
      },
      {
        title:
          "V. Bogdanović Z. Papić N. Ruškić – Karakteristike delimičnih čeonih naleta na pešake",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Karakteristike-delimicnih-ceonih-naleta-na-pesake.pdf",
      },
      {
        title:
          "Z. Papić G. Stojiljković V. Bogdanović – Analiza saobraćajnih nezgoda tipa gaženje pešaka",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Analiza-saobracajnih-nezgoda-tipa-gazenje-pesaka.pdf",
      },
      {
        title:
          "J. Ristić Ž. Ristić – Specifične situacije odgovornosti neosiguranih lica",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Specificne-situacije-odgovornosti-neosiguranih-lica-za-saobracajnu-nezgodu.pdf",
      },
      {
        title: "K. Lipovac M. Vujanić M. Nešić – Od procene do tvrdnje",
        file: "/pdfs/strucna-literatura/VIII-simpozijum/Od-procene-do-tvrdnje-nacin-izrazavanja-stavova-vestaka-pri-izradi-saobracajno-tehnickog-vestacenja2.pdf",
      },
    ],
  },
  {
    naziv: "VII Simpozijum",
    godina: "februar 2009, Vrnjačka Banja",
    radovi: [
      {
        title:
          "B. Antić M. Božović M. M. Vujanić – Uticaj saobraćajno-tehničkog veštacenja na sudske postupke",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Uticaj-saobracajno-tehnickog-vestacenja-na-sudske-postupke.pdf",
      },
      {
        title:
          "M. Vujanić D. Okanović M. Perić – Načelo poverenja sa osvrtom na sadržaj u nacrtu Zakona",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Nacelo-poverenja-sa-osvrtom-na-sadrzaj-u-nacrtu-Zakona-o-bezbednosti-saobracaja-na-putevima.pdf",
      },
      {
        title:
          "D. Pešić N. Marković M. Cvijan – Neophodni elementi nalaza i mišljenja",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Neophodni-elementi-nalaza-i-misljenja-saobracajno-tehnickog-vestacenja.pdf",
      },
      {
        title: "K. Lipovac M. Nešić – Od procene do tvrdnje",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Od-procene-do-tvrdnje-nacin-izrazavanja-stavova-vestaka-pri-izradi-saobracajno-tehnickog-vestacenja3.pdf",
      },
      {
        title:
          "D. Pešić M. M. Vujanić M. Cvijan – Pravilno definisanje važećeg ograničenja brzine",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Pravilno-definisanje-vazeceg-ogranicenja-brzine.pdf",
      },
      {
        title:
          "B. Antić N. Marković D. Pešić – Elementi vremensko-prostorne analize saobraćajne nezgode",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Elementi-vremensko-prostorne-analize-saobracajne-nezgode.pdf",
      },
      {
        title:
          "K. Lipovac D. Pešić M. Božović – Definisanje i klasifikacija propusta učesnika",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Definisanje-i-klasifikacija-propusta-ucesnika-saobracajne-nezgode.pdf",
      },
      {
        title:
          "M. Vujanić M. Božović D. Pešić – Manje poznate činjenice i tumačenja ZoOBS-a i ZOBS-a",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Manje-poznate-cinjenice-i-tumacenja-ZoOBS-a-i-ZOBS-a-od-uticaja-na-ekspertize-saobracajnih-nezgoda.pdf",
      },
      {
        title:
          "S. Kostić N. Ruškić – Naučno-stručni postupci i tehnike saobraćajne ekspertize",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Naucno-strucni-postupci-i-tehnike-saobracajne-ekspertize.pdf",
      },
      {
        title:
          "R. Dragač – Vremensko-prostorna analiza saobraćajne nezgode u izradi nalaza i mišljenja veštaka",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Vremensko-prostorna-analiza-saobracajne-nezgode-u-izradi-nalaza-i-misljenja-vestaka.pdf",
      },
      {
        title:
          "V. Bogdanović Z. Papić N. Ruškić M. Leković – Definisanje parametara potrebnih za analizu sudara",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Definisanje-parametara-potrebnih-za-analizu-sudara-na-prioritetnim-raskrsnicama.pdf",
      },
      {
        title:
          "Z. Papić V. Bogdanović S. Kostić N. Ruškić – Primena računarskih programa u ekspertizama naleta vozila na pešake",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Primena-racunarskih-programa-u-ekspertizama-naleta-vozila-na-pesake-uporedna-analiza.pdf",
      },
      {
        title: "Ž. Ristić M. Ristić – Procena štete na motornim vozilima",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Procena-stete-na-motornim-vozilima.pdf",
      },
      {
        title: "M. Došlić M. Gordić – Provera verodostojnosti vozila",
        file: "/pdfs/strucna-literatura/VII-simpozijum/Provera-verodostojnosti-vozila.pdf",
      },
    ],
  },
];
