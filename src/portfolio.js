/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Elpidoforos' Portfolio",
  description:
    "Φιλόδοξος μάγειρας με επιμονή και υπομονή στο χώρο της γαστρονομίας. Συνεχής επένδυση στη γνώση, το υψηλό επίπεδο και την επαγγελματική εξέλιξη. Πρόθεση για συνεργασία με ανθρώπους που έχουν ανάλογη φιλοσοφία και κοινούς στόχους.",
  og: {
    title: "Dimitrakopoulos Elpidoforos Portfolio",
    type: "website",
    url: "http://195.201.33.141/elpidoforos/",
  },
};

//Home Page
const greeting = {
  title: "Δημητρακόπουλος Ελπιδοφόρος",
  logo_name: "Dimitrakopoulos Elpidoforos",
  nickname: "dimitrakopoulos_elpidoforos",
  subTitle:
    "Φιλόδοξος μάγειρας με επιμονή και υπομονή στο χώρο της γαστρονομίας. Συνεχής επένδυση στη γνώση, το υψηλό επίπεδο και την επαγγελματική εξέλιξη. Πρόθεση για συνεργασία με ανθρώπους που έχουν ανάλογη φιλοσοφία και κοινούς στόχους.",
  resumeLink: "CV_Dimitrakopoulos_Elpidoforos.pdf",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/elpidoforos-dimitrakopoulos-205453213/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:el.dimitrakopoulos@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/el.dimitrakopoulos/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/elpidoforos_dm/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Εκπαίδευση",
      fileName: "CookingSchoolImg",
      skills: [
        "⚡ Ο Ελπιδοφόρος Δημητρακόπουλος γεννήθηκε στην Αθήνα το 1997. Αφού αποφοίτησε από το Γενικό Λύκειο, παράλληλα με τις σπουδές του στη Φιλολογία αποφάσισε να ασχοληθεί με το χώρο της εστίασης.",
        "⚡ Η συνεχής επιθυμία του για προσφορά, ευχαρίστηση και αγάπη, τόσο στους δικούς του ανθρώπους, όσο και στο ευρύ κοινό άρχισε να εκφράζεται πλέον μέσω της μαγειρικής.",
        "⚡ Ξεκίνησε τις σπουδές του στον εκπαιδευτικό όμιλο Le Monde, από όπου πήρε τις βάσεις και τα απαραίτητα εφόδια για την αρχή της καριέρας του στη γαστρονομία.",
        "⚡ Με γνώμονα πάντα την εξέλιξη και τη δίψα του για την απόκτηση γνώσεων συνεχίζει τις σπουδές του στο πρόγραμμα “Professional Culinary Arts” του University of Derby.",
      ],
      softwareSkills: [],
    },
    {
      title: "Εργασιακή Εμπειρία",
      fileName: "ChefWorkingImg",
      skills: [
        "⚡ Από την αρχή της εργασιακής του πορείας εργάστηκε σε ξενοδοχεία 5* γνωστών ξενοδοχειακών ομίλων και υψηλού επιπέδου εστιατόρια.",
        "⚡ Έτσι αποκόμισε πολλές γνώσεις για το αντικείμενο και συναναστράφηκε με ανθρώπους με τεράστια εμπειρία στο κομμάτι της φιλοξενίας.",
        "⚡ Οι φιλοδοξίες του ειναι υψηλές και επιδιώκει τη διαρκή εξέλιξή του, τόσο σε προσωπικό αλλά και επαγγελματικό επίπεδο.",
        "⚡ Θεωρεί τον εαυτό του τυχερό που ασχολείται με τον τουρισμό και την εστίαση, καθώς η μαγειρική φαίνεται να είναι το μεγάλο του πάθος.",
      ],
      softwareSkills: [],
    },
    {
      title: "Λοιπές δραστηριότητες",
      fileName: "HouseAdministrationImg",
      skills: [
        "⚡ Τα τελευταία χρόνια είναι μέρος ενός νέου project στην εταιρεία “Ubilus”, στην οποία διαχειρίζεται ακίνητα βραχυχρόνιας μίσθωσης.",
        "⚡ Αυτό αποτελεί μια δραστηριότητα εκτός κουζίνας, η οποία όμως σχετίζεται άρρηκτα με την επιθυμία του για δραστηριοποίησή του σε πολλούς τομείς του τουριστικού κλάδου.",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Πανεπιστήμιο Derby",
      subtitle: "Φοιτητής στο πρόγραμμα BA - (Hons) Professional Culinary Arts",
      logo_path: "university_of_derby_logo.png",
      alt_name: "University of Derby",
      duration: "01/2022 - Σήμερα",
      descriptions: [
        "⚡ Εμβάθυνση στο HR και F&B management, στο self reflection και στη σωστή λειτουργία τουριστικών επιχειρήσεων",
        "⚡ Πτυχιακή: “Διεύρυνση της καταναλωτικής τάσης του μελομακάρονου με επανασχεδιασμό σε «μελοmacaron» ”",
      ],
      website_link: "https://www.derby.ac.uk/",
    },
    {
      title: "LE MONDE Ινστιτούτο Ξενοδοχειακών & Τουριστικών Σπουδών",
      subtitle:
        "Απόφοιτος του τμήματος «Τεχνικός Μαγειρικής Τέχνης – Αρχιμάγειρας»",
      logo_path: "lemonde_logo.png",
      alt_name: "Le Monde",
      duration: "09/2018 - 06/2020",
      descriptions: [
        "⚡ Εργαστηριακά μαθήματα στην τέχνη της μαγειρικής και της ζαχαροπλαστικής",
        "⚡ Θεωρητικά μαθήματα στην εστιατορική, το f&b management, στις αρχές οικονομικής θεωρίας και κοστολόγιο, στην υγιεινή και το HACCP",
      ],
      website_link: "https://www.lemonde.edu.gr/en/",
    },
    {
      title: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών",
      subtitle: "Σχολή Φιλολογίας",
      logo_path: "uoa_logo.png",
      alt_name: "University of Athens",
      duration: "10/2015 - 09/2020",
      descriptions: [
        "⚡ Σπουδές στο τμήμα Φιλολογίας του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών",
      ],
      website_link: "https://www.uoa.gr/",
    },
    {
      title: "2ο Γενικό Λύκειο Αγίας Βαρβάρας",
      subtitle: "Απόφοιτος",
      logo_path: "education_logo.png",
      alt_name: "High School of Agia Varvara",
      duration: "09/2012 - 06/2015",
      descriptions: ["⚡ Βαθμός: 17.5/20"],
      website_link: "http://2lyk-ag-varvar.att.sch.gr/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Εμπειρία",
  subtitle: "Εργασία, Σεμινάρια, Εθελοντισμός",
  description:
    "Η εργασιακή μου εμπειρία στον χώρο της εστίασης και του τουρισμού ξεκίνησε από μικρές επιχειρήσεις, οι οποίες με έκαναν να θέλω να ασχοληθώ με αυτόν τον κλάδο. Στη συνέχεια, επενδύοντας πάντα στη γνώση και στην εξέλιξη κατάφερα να εργαστώ σε δύο μεγάλες ξενοδοχειακές μονάδες των ομίλων της “Grecotel” και της “Four Seasons”. Αυτή τη στιγμή βρίσκομαι στο εστιατόριο “OVIO” ως “Chef de partie” της κρύας κουζίνας, κατακτώντας πρόσφατα τον τίτλο του καλύτερου Ιταλικού εστιατορίου στα «Tasty Awards 2022». Παράλληλα εργάζομαι στην επιχείρηση “Ubilus” ως διαχειριστής βραχυχρόνιας μίσθωσης ακινήτων στο project “GoForBnB”.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Εργασία",
      experiences: [
        {
          title: "Chef de Partie",
          company: "Ovio Athens",
          company_url: "https://www.ovio.gr/",
          logo_path: "ovio_logo.png",
          duration: "08/2021 - Σήμερα",
          location: "Αθήνα, Ελλάδα",
          description:
            "• Προαγωγή σε υπεύθυνο κρύας κουζίνας από Demi Chef de partie (08/2021 - 04/2022) → Chef de partie(05/2022 - Σήμερα)\n• Πόστο κρύας κουζίνας\n• Βραβείο καλύτερου Ιταλικού Εστιατορίου στα Tasty Awards 2022",
          color: "#0879bf",
        },
        {
          title: "Commis Chef",
          company: "Four Seasons Astir Palace",
          company_url: "https://www.fourseasons.com/athens/",
          logo_path: "four_seasons_logo.png",
          duration: "07/2020 - 10/2020",
          location: "Αθήνα, Ελλάδα",
          description: "• Πόστο του πρωινού στο εστιατόριο “Mercato”",
          color: "#9b1578",
        },
        {
          title: "Trainee Chef",
          company: "Cape Sounio Grecotel Exclusive Resort",
          company_url: "https://www.capesounio.com/",
          logo_path: "cape_sounio_logo.png",
          duration: "07/2019 - 10/2019",
          location: "Αθήνα-Σούνιο, Ελλάδα",
          description:
            "• Πόστο: Πρωινός μπουφές – live cooking\n• Εστιατόριο παραλίας του ξενοδοχείου (Μοντέρνα ελληνική ταβέρνα)",
          color: "#fc1f20",
        },
        {
          title: "Μάγειρας",
          company: "Bungalow 19",
          company_url:
            "https://www.tripadvisor.com.gr/Restaurant_Review-g3695541-d12887208-Reviews-Bungalow_19-Peristeri_Attica.html",
          logo_path: "bungalow_19_logo.png",
          duration: "11/2018 - 01/2019",
          location: "Αθήνα, Ελλάδα",
          description: "• Υπεύθυνος κουζίνας στο πόστο του Brunch",
          color: "#c116c9",
        },
        {
          title: "Βοηθός Μάγειρα",
          company: "Ά...τιμων!",
          company_url: "https://www.facebook.com/atimon.gr/",
          logo_path: "atimon_logo.png",
          duration: "08/2018 - 11/2018",
          location: "Αθήνα Ελλάδα",
          description:
            "• Βοηθός μάγειρα σε Ελληνικό μεζεδοπωλείο\n• Ζεστή κουζίνα – τηγάνια",
          color: "#5c6ef0",
        },
        {
          title: "Διαχειριστής Βραχυχρόνιας Μίσθωσης Ακινήτων",
          company: "Ubilus",
          company_url: "https://ubilus.com/en",
          logo_path: "ubilus_logo.png",
          duration: "10/2020 - Σήμερα",
          location: "Αθήνα, Ελλάδα",
          description:
            "• Διαχειριστής βραχυχρόνιας μίσθωσης ακινήτων\n• Διαχείριση κρατήσεων και πληρωμών\n• Επικοινωνία με τους κατόχους των ακινήτων και με τους επισκέπτες\n• Φωτογράφιση, προώθηση και ένταξη των ακινήτων στις αντίστοιχες πλατφμόρμες\n• Δημιουργία ταξιδιωτικού οδηγού και πληροφοριών για τα ακίνητα",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Σεμινάρια",
      experiences: [
        {
          title: "Masterclass in French Cuisine & French Pastry",
          company: "FERRANDI Paris",
          company_url: "https://www.ferrandi-paris.com/",
          logo_path: "kitchen_logo.png",
          duration: "13/01/2020",
          location: "Παρίσι, Γαλλία",
          description:
            "• Ξενάγηση στους χώρους της σχολής\n• Demo μαγειρικής και ζαχαροπλαστικής σε ένα από τα εργαστήρια\n• Γευσιγνωσία πιάτων από διακεκριμένους καθηγητές",
          color: "#ee3c26",
        },
        {
          title: "«Τάρτα» από τον Pastry Chef Δημήτριο Χρονόπουλο",
          company: "Le Monde",
          logo_path: "kitchen_logo.png",
          duration: "21/02/2019",
          location: "Αθήνα, Ελλάδα",
          description:
            "• Τεχνική και tips για ζύμη τάρτας\n• Διαφορετικές και πρωτότυπες γεμίσεις τάρτας",
          color: "#d35cf7",
        },
        {
          title: "«Ελληνική Υψηλή Γαστρονομία» από τον Γκίκα Ξενάκη",
          company: "Le Monde",
          logo_path: "kitchen_logo.png",
          duration: "07/02/2019",
          location: "Αθήνα, Ελλάδα",
          description:
            "• Καλύτερος σεφ του γαστρονομικού οδηγού “Gault & Millau Hellas” 2020 του εστιατορίου “Aleria” βραβευμένο με Χρυσό Σκούφο\n• Signature πιάτα του εστιατορίου όπως το “Tαρτάρ Γιουβαρλάκι” και την αποδομημένη “Χορτόπιτα”",
          color: "#a29d1a",
        },
      ],
    },
    {
      title: "Εθελοντισμός",
      experiences: [
        {
          title: "Wise Food Stories",
          logo_path: "volunteering_logo.png",
          duration: "10/10/2018",
          location: "Αθήνα, Ελλάδα",
          description:
            "• Γαστρονομικό event με θέμα την αυτόχθονη φυλή των ελληνικών στεπικών βοοειδών, τύπου Κατερίνης\n• Βοήθεια αφιλοκερδώς στην οργάνωση και στην προετοιμασία της εκδήλωσης\n• Ομιλίες για το πώς μπορεί να επιτευχθεί η καλύτερη μορφή συνεργασίας των ανθρώπων της πρωτογενούς παραγωγής με τους ανθρώπους της αγοράς",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Gallery Page
const galleryHeader = {
  title: "Συλλογή",
  description:
    "Φωτογραφικό υλικό από την προσωπική μου δουλειά καθώς και πιάτα από τα μαγαζιά που έχω εργαστεί",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Επικοινωνήστε μαζί μου",
    profile_image_path: "elpidoforos_contact_transparent.png",
    description:
      "Μπορείτε να επικοινωνήσετε μαζί μου στα παρακάτω στοιχεία καθώς και σχεδόν σε όλα τα social media",
    image_description: "Πάντα διαθέσιμος για νέες και δημιουργικές συνεργασίες",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Email",
    subtitle: "el.dimitrakopoulos@gmail.com",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Κινητό Τηλέφωνο",
    subtitle: "+30 698 0145 862",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  galleryHeader,
  contactPageData,
};
