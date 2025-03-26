/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Στεργιοπούλου Γεωργία",
  description: "TODO text ...",
  og: {
    title: "Stergiopoulou Georgia Portfolio",
    type: "website",
    url: "https://www.stergiopoulou.com/",
  },
};

//Home Page
const greeting = {
  title: "Στεργιοπούλου Γεωργία",
  profession:
    "Ψυχολόγος MA Αναπτυξιακή Ψυχολογία - εκπ. Γνωσιακή Συμπεριφορική Ψυχοθεραπεύτρια",
  logo_name: "Stergiopoulou Georgia",
  nickname: "stergiopoulou_georgia",
  subTitle: "Καλώς ήρθατε στο διαδικτυακό μου τόπο!",
  resumeLink: "CV-Stergiopoulou_Georgia.pdf",
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
    link: "https://www.linkedin.com/in/georgia-stergiopoulou-5434931a6",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:gstergp@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.instagram.com/stergiopoulou.psy",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/profile.php?id=100009927990841",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
];

const skills = {
  data: [
    {
      title: "",
      fileName: "FullStackImg",
      skills: [
        "Γεια σας! Λέγομαι Στεργιοπούλου Γεωργία, είμαι Ψυχολόγος με Μεταπτυχιακή Εκπαίδευση στην Αναπτυξιακή Ψυχολογία στο Πανεπιστήμιο Κρήτης. Έχω εκπαιδευτεί στη Γνωσιακή Συμπεριφορική Ψυχοθεραπεία (CBT) στο Ινστιτούτο Έρευνας και Θεραπείας  Συμπεριφοράς.",
        "Εδώ θα βρείτε πληροφορίες για το εκπαιδευτικό και ακαδημαϊκό μου υπόβαθρο, την κλινική μου εμπειρία, την Γνωσιακή προσέγγιση ως μέθοδο ψυχοθεραπείας, αλλά και το πώς μπορούμε αποκτήσουμε μια θεραπευτική συνεργασία.",
      ],
      softwareSkills: [],
    },
    {
      title: "Βιογραφικό",
      fileName: "CloudInfraImg",
      skills: [
        "Η Γεωργία Στεργιοπούλου, κάτοχος άδειας άσκησης επαγγέλματος Ψυχολόγου στην Ελλάδα (Αρ. Πρώτ. 3997/2020), ολοκλήρωσε τις βασικές της σπουδές στο Τμήμα Ψυχολογίας του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών. Έπειτα, συνέχισε τις σπουδές της σε μεταπτυχιακό επίπεδο στο αντικείμενο της Αναπτυξιακής Ψυχολογίας στο Πανεπιστήμιο Κρήτης όπου αποφοίτησε με Άριστα. Έχει ολοκληρώσει θεωρητική εκπαίδευση στη Γνωσιακή Συμπεριφορική Θεραπεία (CBT), στην Εταιρεία Γνωσιακών και Συμπεριφοριστικών Σπουδών, σύμφωνα με τα κριτήρια της European Association for Behavioral and Cognitive Therapies (EAΒCT).",
        "Διαθέτει κλινική και πρακτική εμπειρία σε ποικίλους φορείς ψυχικής υγείας, όπως το 401 Γενικό Στρατιωτικό Νοσοκομείο, η Κινητή Μονάδα Ψυχικής Υγείας Λασιθίου, το Οικοτροφείο «Αθηνά» της Πανελλήνιας Ένωσης για την Ψυχοκοινωνική Αποκατάσταση και Επαγγελματική Επανένταξη (ΠΕΨΑΕΕ).",
        "Επιπλέον, έχει εργαστεί στο κέντρο Ειδικών Θεραπειών «Σοφία Τσαντουλή», παρέχοντας υπηρεσίας Ψυχοθεραπείας σε παιδιά και εφήβους καθώς και Συμβουλευτική Γονέων.",
        "Εργάζεται ιδιωτικά, παρέχοντας συνεδρίες ατομικής ψυχοθεραπείας σε ενήλικες με ευρύ φάσμα διαπροσωπικών δυσκολιών (χωρισμός, πένθος ), με  κατάθλιψη, αγχώδεις διαταραχές (Γενικευμένη Αγχώδης Διαταραχή, διαταραχή Πανικού, κοινωνική αγχώδης διαταραχή, φοβίες), ιδεοψυχαναγκαστική διαταραχή, διαταραχή μετατραυματικού στρές και διαταραχές προσωπικότητας (οριακή, ναρκισσιστική, σχιζοειδής).",
      ],
      softwareSkills: [],
    },
    // {
    //   title: "Λοιπές δραστηριότητες",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [],
    // },
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
      title: "Εταιρεία Γνωσιακών & Συμπεριφοριστικών Σπουδών",
      subtitle: "Ινστιτούτο Έρευνας & Θεραπείας Συμπεριφοράς",
      logo_path: "299483022_439038911581522_3470611822308034606_n.png",
      alt_name: "Εταιρεία Γνωσιακών & Συμπεριφοριστικών Σπουδών",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Εκπαίδευση στη Γνωσιακή & Συμπεριφορική Θεραπεία (CBT)",
      ],
      website_link: "https://cbt.edu.gr/erg/",
    },
    {
      title: "Πανεπιστήμιο Κρήτης",
      subtitle: "Παιδαγωγικό Τμήμα Προσχολικής Εκπαίδευσης",
      logo_path: "309242282_460116232819470_3137526444353857927_n.png",
      alt_name: "Πανεπιστήμιο Κρήτης",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Μεταπτυχιακό Δίπλωμα : Αναπτυξιακή Ψυχολογία και Παιδαγωγικές Εφαρμογές",
      ],
      website_link: "https://ptpepms-epa.edc.uoc.gr/index.php/home-pms3/",
    },
    {
      title: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών (ΕΚΠΑ)",
      subtitle: "Τμήμα Ψυχολογίας",
      logo_path: "LOGO_UOA COL2.png",
      alt_name: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών (ΕΚΠΑ)",
      duration: "2016 - 2020",
      descriptions: ["⚡ Πτυχίο Ψυχολογίας", "⚡ Βαθμός: 8.05/10"],
      website_link: "http://www.psych.uoa.gr/",
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
  subtitle: "",
  description:
    "Διαθέτει κλινική και πρακτική εμπειρία σε διάφορους φορείς ψυχικής υγείας, όπως στρατιωτικά νοσοκομεία, κινητές μονάδες και δομές ψυχοκοινωνικής αποκατάστασης. Έχει εργαστεί σε κέντρο ειδικών θεραπειών, παρέχοντας ψυχοθεραπεία σε παιδιά, εφήβους και συμβουλευτική γονέων. Σήμερα δραστηριοποιείται ιδιωτικά, προσφέροντας ατομική ψυχοθεραπεία σε ενήλικες με διαπροσωπικές δυσκολίες, κατάθλιψη, αγχώδεις διαταραχές, ιδεοψυχαναγκαστική διαταραχή, μετατραυματικό στρες και διαταραχές προσωπικότητας.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Εργασία",
      experiences: [
        {
          title: "Ψυχολόγος",
          company: "Ψυχοθεραπεύτρια - Ιδιωτική Άσκηση Επαγγέλματος",
          company_url: "https://www.instagram.com/stergiopoulou.psy",
          logo_path: "legato_logo.png",
          duration: "06/2020 - Σήμερα",
          location: "Αθήνα, Ελλάδα",
          description:
            "• Αξιολόγηση και κατανόηση του ιστορικού και των συμπτωμάτων του ασθενούς\n• Αναγνώριση και αμφισβήτηση αρνητικών σκέψεων και πεποιθήσεων\n• Τεχνικές διαχείρισης άγχους και κατάθλιψης, όπως χαλάρωση, ενσυνειδητότητα (mindfulness)\n• Ανάπτυξη υγιών συμπεριφορών και ενίσχυση της αυτοεκτίμησης\n• Αξιολόγηση προόδου και προσαρμογή της θεραπείας για βελτιστοποίηση των αποτελεσμάτων",
          color: "#0879bf",
        },
        {
          title: "Ψυχολόγος",
          company: "Οικοτροφείο Αθηνά ΠΕΨΑΕΕ",
          company_url:
            "https://www.pepsaee.gr/%CE%94%CE%BF%CE%BC%CE%AD%CF%82/%CE%9F%CE%B9%CE%BA%CE%BF%CF%84%CF%81%CE%BF%CF%86%CE%B5%CE%AF%CE%BF-%CE%91%CE%B8%CE%B7%CE%BD%CE%AC",
          logo_path: "legato_logo.png",
          duration: "06/2023 - Σήμερα",
          location: "Αθήνα, Ελλάδα",
          description:
            "• Αξιολόγηση ψυχιατρικών αναγκών των ενοίκων και παρακολούθηση της ψυχικής τους κατάστασης\n• Υποστήριξη και ψυχολογική υποστήριξη για την ενίσχυση της συναισθηματικής ευημερίας\n• Στρατηγικές διαχείρισης συμπτωμάτων και ενίσχυση των κοινωνικών δεξιοτήτων για καλύτερη ένταξη στην κοινότητα\n• Συνεργασία με άλλους επαγγελματίες υγείας για ολοκληρωμένη φροντίδα και ανάπτυξη θεραπευτικών σχεδίων\n• Εκπαίδευση και υποστήριξη οικογενειών για την καλύτερη κατανόηση και υποστήριξη των ψυχοκοινωνικών αναγκών των ενοίκων\n• Νοητική ενδυνάμωση ατόμων με άνοια, μέσω δραστηριοτήτων και ασκήσεων που ενισχύουν τη μνήμη, την προσοχή και τις γνωστικές ικανότητες",
          color: "#0879bf",
        },
        {
          title: "Ψυχολόγος",
          company: "Κέντρο Ειδικών Θεραπειών - Τσαντουλή Σοφία",
          logo_path: "legato_logo.png",
          duration: "06/2022 - Σήμερα",
          location: "Αθήνα, Ελλάδα",
          description:
            "• Διάγνωση και παρέμβαση σε μαθησιακά προβλήματα\n• Ατομικές ψυχοθεραπείες με παιδιά και εφήβους\n• Ειδικά θεραπευτικά προγράμματα για τη ΔΑΦ",
          color: "#0879bf",
        },
        {
          title: "Ψυχολόγος",
          company: "Κινητή Μονάδα Ψυχικής Υγείας Λασιθίου",
          company_url: "https://arwgi.gr/",
          logo_path: "muffito_logo.png",
          duration: "06/2020 - 06/2022",
          location: "Άγιος Νικόλαος (Λασιθίου), Ελλάδα",
          description:
            "• Λήψη Κοινωνικού Ιστορικού\n• Ψυχοθεραπεία/ Ψυχολογική Υποστήριξη & Συμβουλευτική Γονέων\n• Επαγγελματική Συμβουλευτική & Χορήγηση ψυχομετρικών εργαλείων (WISC-V, WAIS-IV)",
          color: "#9b1578",
        },
        {
          title: "Ασκούμενη Ψυχολόγος",
          company: "401 Γενικό Στρατιωτικό Νοσοκομείο Αθηνών",
          company_url: "https://401gsn.army.gr/",
          logo_path: "freecopy_logo.png",
          duration: "02/2020 - 04/2020",
          location: "Αθήνα, Ελλάδα",
          description:
            "• Λήψη Κοινωνικού Ιστορικού & Παρακολούθηση Εποπτείας\n• Ψυχοθεραπεία με ογκολογικούς ασθενείς\n• Ψυχολογική υποστήριξη ασθενών και των οικογενειών τους",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Σεμινάρια",
      experiences: [
        {
          title:
            "Επιστημονικό Συνέδριο Recovery Ανάκαμψη στην Ψυχική Υγεία: Συμπερίληψη και Δικαιώματα, 2024",
          company: "Ομοσπονδία «Αργώ»",
          logo_path: "delhivery_logo.png",
          location: "Αθήνα, Ελλάδα",
          description: "",
          color: "#ee3c26",
        },
        {
          title:
            "Συμμετοχή με poster στο 30ο  Πανελλήνιο Συνέδριο Ψυχιατρικής, 2022",
          company: "Ελληνική Ψυχιατρική Εταιρεία",
          logo_path: "delhivery_logo.png",
          location: "Θεσσαλονίκη, Ελλάδα",
          description: "",
          color: "#e64a19",
        },
        {
          title: "6ο Πανελλήνιο Συνέδριο Γνωσιακών Ψυχοθεραπειών, 2019",
          company: "Ελληνική Εταιρεία Έρευνας της Συμπεριφοράς",
          logo_path: "delhivery_logo.png",
          location: "Θεσσαλονίκη, Ελλάδα",
          description: "",
          color: "#f39c12",
        },
        {
          title:
            "Διημερίδα με θέμα «ΛΟΑΤΚΙ+ Δικαιώματα, Ψυχική Υγεία & Κοινωνικές Προεκτάσεις», 2018",
          company: "Orlando LGBTQ+",
          logo_path: "delhivery_logo.png",
          location: "Αθήνα, Ελλάδα",
          description: "",
          color: "#8e44ad",
        },
        {
          title:
            "Ημερίδα με θέμα «Σεξουαλικότητα και Σεξουαλικές Δυσλειτουργίες, 2018",
          company: "Δίκτυο Νέων Ψυχιάτρων",
          logo_path: "delhivery_logo.png",
          location: "Αθήνα, Ελλάδα",
          description: "",
          color: "#c0392b",
        },
        {
          title: "6ο Πανελλήνιο Συνέδριο Αναπτυξιακής Ψυχολογίας, 2018",
          company: "Ελληνική Ψυχολογική Εταιρεία",
          logo_path: "delhivery_logo.png",
          location: "Θεσσαλονίκη, Ελλάδα",
          description: "",
          color: "#27ae60",
        },
        {
          title: "11ο Συνέδριο «Πένθη και Καταθλίψεις», 2017",
          company: "Ελληνική Ψυχαναλυτική Εταιρεία",
          logo_path: "delhivery_logo.png",
          location: "Αθήνα, Ελλάδα",
          description: "",
          color: "#16a085",
        },
        {
          title:
            "Επιστημονική Ημερίδα με θέμα «Αξιοπρέπεια του Ανθρώπου και Ανθρώπινα Δικαιώματα», 2016",
          company: "UNESCO",
          logo_path: "delhivery_logo.png",
          location: "Αθήνα, Ελλάδα",
          description: "",
          color: "#2980b9",
        },
        {
          title: "Σχολική Ψυχολογία",
          company: "Πανεπιστήμιο Αιγαίου",
          company_url:
            "https://www.golearn.gr/moriodotoymeno-seminario-sti-sholiki-psyhologia",
          logo_path: "delhivery_logo.png",
          duration: "440 ώρες, 9 μήνες",
          location: "Ρόδος",
          description: "",
          color: "#34495e",
        },
        {
          title: "Ειδική Αγωγή",
          company: "Πανεπιστήμιο Πατρών",
          company_url:
            "https://kedivim.upatras.gr/cooperatedcourse/special-education-course/",
          logo_path: "intel_logo.jpg",
          duration: "450 ώρες, 9 μήνες",
          location: "Πάτρα",
          description: "",
          color: "#0071C5",
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

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Επικοινωνήστε μαζί μου",
    // profile_image_path: "georgia-profile.png",
    profile_image_path: "DSC_0506_cropped.jpg",
    description:
      "Μπορείτε να επικοινωνήσετε μαζί μου στα παρακάτω στοιχεία καθώς και σχεδόν σε όλα τα social media",
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
    subtitle: "gstergp@gmail.com",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Κινητό Τηλέφωνο",
    subtitle: "+30 698 815 7663",
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
  contactPageData,
};
