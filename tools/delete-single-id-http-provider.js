const http = require('http');

const inputData = {
  "organizationalUnits": [
    {
      "city": "Welchboro",
      "postalCode": "70609-0065",
      "phone": "350.814.7952",
      "id": "1bd7e3b5-2c6a-42a4-91c3-2838d52c3d8e",
      "name": "Sauer Group",
      "country": "Bermuda",
      "address": "718 Rippin Ramp"
    },
    {
      "address": "44701 W 1st Street",
      "city": "Lake Noemie",
      "postalCode": "38943-4319",
      "phone": "1-407-724-1720 x326",
      "id": "8c606df1-7251-4389-be58-244ef1b1066e",
      "name": "Schoen and Sons",
      "country": "Sint Maarten"
    },
    {
      "id": "322dac0d-f422-431f-a162-206131a1757b",
      "name": "Collins Group",
      "country": "Aruba",
      "address": "4995 Isobel Fall",
      "city": "Annieburgh",
      "postalCode": "09813-4084",
      "phone": "215-301-2276 x83904"
    },
    {
      "id": "dd1923fa-fdc0-41cc-a783-2b01bd70e7cb",
      "name": "Nader - Ullrich",
      "country": "Uganda",
      "address": "2038 Crona Spurs",
      "city": "Keiratown",
      "postalCode": "45673",
      "phone": "(481) 714-6779 x97422"
    },
    {
      "id": "be2dd224-f907-4997-acad-301b9d7b4066",
      "name": "Medhurst LLC",
      "country": "India",
      "address": "97364 Bauch Brook",
      "city": "Sheboygan",
      "postalCode": "15266",
      "phone": "1-950-310-8158 x39780"
    },
    {
      "id": "5fb1593e-5ee7-4b88-b567-4d93c161684a",
      "name": "Johnson and Sons",
      "country": "Guernsey",
      "address": "3173 University Avenue",
      "city": "Pittsburgh",
      "postalCode": "15181",
      "phone": "482-968-0379 x12023"
    },
    {
      "id": "b140eedf-b38e-4954-ab9b-0f352a1fd9e3",
      "name": "Hammes - Hickle",
      "country": "Gabon",
      "address": "2920 Herbert Fields",
      "city": "North Aliya",
      "postalCode": "79725-7725",
      "phone": "(839) 484-4416 x5727"
    },
    {
      "id": "0eded65e-104f-4b36-964a-ca5485b33624",
      "name": "Littel Inc",
      "country": "Finland",
      "address": "33892 Keyshawn Lakes",
      "city": "Leonardboro",
      "postalCode": "81175-9070",
      "phone": "1-245-464-6237 x344"
    },
    {
      "city": "Aurora",
      "postalCode": "10950-0030",
      "phone": "496.268.3148 x9531",
      "id": "bf1d1c69-d674-4d16-a881-ace7432b7c42",
      "name": "DuBuque Inc",
      "country": "United Arab Emirates",
      "address": "28834 E 12th Street"
    },
    {
      "city": "Vista",
      "postalCode": "29529",
      "phone": "237-731-6360 x259",
      "id": "d204747a-ba27-48d3-bc9d-c8795bec906d",
      "name": "Greenfelder Inc",
      "country": "Spain",
      "address": "9598 Stracke Springs"
    },
    {
      "postalCode": "10047-6201",
      "phone": "(623) 688-0857 x72523",
      "id": "c3c02dde-b268-4b11-99b8-f7d74821e053",
      "name": "Green, Streich and Kunze",
      "country": "Norfolk Island",
      "address": "6445 Pine Close",
      "city": "New Paxtonburgh"
    },
    {
      "city": "Billings",
      "postalCode": "05267-1091",
      "phone": "1-798-589-9800 x299",
      "id": "77c93bc4-eb54-4eb5-81f0-89c23889483b",
      "name": "Volkman - Kshlerin",
      "country": "Bulgaria",
      "address": "78759 Ashly Ville"
    },
    {
      "country": "Guinea",
      "address": "3185 Jonathan Curve",
      "city": "West Sofia",
      "postalCode": "98430-9456",
      "phone": "(708) 280-8009 x4827",
      "id": "cc3f10be-6dcf-4524-bc71-0f4b6ae0d2f9",
      "name": "Stoltenberg, Marvin and Dibbert"
    },
    {
      "id": "a1901139-c4b8-4dfe-9e36-40e4334576e1",
      "name": "Sanford, Osinski and Schmitt",
      "country": "Suriname",
      "address": "370 Gladstone Road",
      "city": "Serenaton",
      "postalCode": "04257-7229",
      "phone": "(640) 826-1023 x7557"
    },
    {
      "city": "Lake Kristofer",
      "postalCode": "11333",
      "phone": "1-748-292-0554 x75048",
      "id": "518b2f72-34ed-4e70-a387-0734a1d86f4a",
      "name": "Lebsack - Fritsch",
      "country": "Pakistan",
      "address": "74917 Henry Street"
    },
    {
      "id": "16752e9b-e1f8-4391-a1a1-faad616adf20",
      "name": "Fisher Inc",
      "country": "Chile",
      "address": "140 Treutel Rapids",
      "city": "East Lilla",
      "postalCode": "48244",
      "phone": "266-320-0772 x826"
    },
    {
      "phone": "373-392-4451 x41319",
      "id": "4eb305bb-ddf4-44e2-9951-aece46230e29",
      "name": "Franecki and Sons",
      "country": "Equatorial Guinea",
      "address": "1034 Prohaska Shoal",
      "city": "Ryanfurt",
      "postalCode": "51282"
    },
    {
      "id": "09899c39-b417-4516-b8d4-b85eef0c95e7",
      "name": "VonRueden Group",
      "country": "Saint Vincent and the Grenadines",
      "address": "8624 E Broadway Street",
      "city": "New Conrad",
      "postalCode": "33778",
      "phone": "1-829-944-8873 x64750"
    },
    {
      "name": "Schoen Group",
      "country": "Uzbekistan",
      "address": "9971 Daugherty Club",
      "city": "New Jaquan",
      "postalCode": "03587-8594",
      "phone": "957.605.0063",
      "id": "2721cb7c-5174-47e5-90d8-fa2e3be2b6ce"
    },
    {
      "phone": "(344) 317-7342 x7572",
      "id": "a8994a96-da6d-4853-8bd6-8f75d585c7a4",
      "name": "Jast Inc",
      "country": "Liechtenstein",
      "address": "94338 Dennis Mountains",
      "city": "Port Clinton",
      "postalCode": "27335-7488"
    },
    {
      "address": "9022 Upton Locks",
      "city": "South Otis",
      "postalCode": "40029-3871",
      "phone": "(904) 585-1300",
      "id": "9181b772-12e7-463e-bb6b-83d9e202a136",
      "name": "Lebsack, Cassin and Bartoletti",
      "country": "Anguilla"
    },
    {
      "postalCode": "68673-8415",
      "phone": "1-879-349-5593 x3848",
      "id": "db02e411-f6cb-44d7-80ce-884c6760e135",
      "name": "Hermann LLC",
      "country": "Djibouti",
      "address": "94377 Dawson Neck",
      "city": "Stantonworth"
    },
    {
      "postalCode": "53015",
      "phone": "1-274-847-8657 x94740",
      "id": "1cec44eb-5c9d-4869-8474-dadd541792cf",
      "name": "Parisian - Simonis",
      "country": "Lebanon",
      "address": "28161 Heathcote Plaza",
      "city": "Fort Wilmermouth"
    },
    {
      "id": "acf332ca-c5c4-4d49-b3b7-7c5f04c57a75",
      "name": "Orn and Sons",
      "country": "Chad",
      "address": "735 N Jackson Street",
      "city": "North Pansy",
      "postalCode": "36967",
      "phone": "1-605-637-5441"
    },
    {
      "address": "93883 Volkman Walk",
      "city": "North Alexandrineland",
      "postalCode": "26470-7583",
      "phone": "601-427-2674 x1633",
      "id": "af3d4b34-0351-4aec-9727-adcb7984f929",
      "name": "Skiles, Dickens and Doyle",
      "country": "Nigeria"
    },
    {
      "phone": "244.637.6304",
      "id": "61816320-2621-4197-ad20-42e870cef633",
      "name": "Kuvalis and Sons",
      "country": "Wallis and Futuna",
      "address": "90352 Abdullah Way",
      "city": "Craigborough",
      "postalCode": "39301"
    },
    {
      "address": "9223 Strosin Lake",
      "city": "West Lorenzacester",
      "postalCode": "14587-6612",
      "phone": "1-680-436-4762 x30154",
      "id": "f136ad1b-4969-4e4d-8456-bd18553728a2",
      "name": "Wiegand, Murray and Kub",
      "country": "Cambodia"
    },
    {
      "id": "a1096ba6-9186-4bf2-bbea-7f41a8120de7",
      "name": "Lowe Group",
      "country": "Slovakia",
      "address": "40019 Jackie Shore",
      "city": "Reading",
      "postalCode": "61899-5507",
      "phone": "423-898-4454 x9097"
    },
    {
      "phone": "(894) 362-7080 x40854",
      "id": "beb3024c-0a11-49e2-b305-4d3784d4d69c",
      "name": "Miller - Bernier",
      "country": "Aland Islands",
      "address": "22220 Smith Ford",
      "city": "North Eugene",
      "postalCode": "25693"
    },
    {
      "id": "4b26d160-a8e4-42d4-9f2c-81d6b907b8be",
      "name": "Ortiz, Schinner and Towne",
      "country": "Reunion",
      "address": "86490 Park Drive",
      "city": "North Eldonberg",
      "postalCode": "27394",
      "phone": "529-581-7890 x5879"
    },
    {
      "id": "504f4777-f5a7-4ef2-a275-df174040b706",
      "name": "Kohler, Graham and Casper",
      "country": "Bonaire, Sint Eustatius and Saba",
      "address": "26124 Park Road",
      "city": "Caterinamouth",
      "postalCode": "93262-9177",
      "phone": "1-428-475-0910 x7799"
    },
    {
      "country": "Dominican Republic",
      "address": "62478 Boyle Squares",
      "city": "East Kimberly",
      "postalCode": "20642",
      "phone": "(382) 586-1041",
      "id": "c70185b2-3540-46c3-8a18-6ecd2d6e07f3",
      "name": "Connelly - Torp"
    },
    {
      "id": "d6005a5e-c34a-48a7-8fd1-f8bbdfe61214",
      "name": "Kuvalis - Bartell",
      "country": "Iraq",
      "address": "88383 Millie Cove",
      "city": "Janetcester",
      "postalCode": "86218-5713",
      "phone": "1-726-415-5022 x89991"
    },
    {
      "country": "Lesotho",
      "address": "90332 Lubowitz Canyon",
      "city": "Sauershire",
      "postalCode": "27011-9982",
      "phone": "866-575-0809",
      "id": "6e28dc40-4932-44de-bad6-d5b809106b96",
      "name": "Braun Inc"
    },
    {
      "id": "7785ade0-707c-4fc3-9e5c-f4c3f2518799",
      "name": "Hackett - Raynor",
      "country": "Albania",
      "address": "18026 State Road",
      "city": "Kraigfort",
      "postalCode": "62900-0305",
      "phone": "684-927-8655 x02715"
    },
    {
      "city": "North Asia",
      "postalCode": "27402-3238",
      "phone": "896.271.9762",
      "id": "24b2e2b4-e0cc-4f94-be69-c43a4add5af4",
      "name": "Mann - Stroman",
      "country": "Turks and Caicos Islands",
      "address": "470 Thad Branch"
    },
    {
      "id": "ae6682ab-d06d-47eb-b5dc-7b3767cb5def",
      "name": "Stamm - Kreiger",
      "country": "Philippines",
      "address": "771 N Walnut Street",
      "city": "Spring",
      "postalCode": "26478",
      "phone": "1-302-991-6126 x844"
    },
    {
      "address": "7285 Gerlach Track",
      "city": "Boganfurt",
      "postalCode": "57109",
      "phone": "(892) 798-9153 x76371",
      "id": "b74200c9-39f2-4503-9627-3c87b869732c",
      "name": "Emmerich and Sons",
      "country": "Montserrat"
    },
    {
      "name": "Donnelly and Sons",
      "country": "Belarus",
      "address": "88313 Lemke Avenue",
      "city": "Bartonboro",
      "postalCode": "82333",
      "phone": "1-280-523-9469",
      "id": "e55c032d-36b0-4a5a-aea6-ffef2aa5065c"
    },
    {
      "country": "Japan",
      "address": "3620 N College Street",
      "city": "Mountain View",
      "postalCode": "42489-9775",
      "phone": "(928) 853-2138 x0662",
      "id": "878eddac-f2ad-452d-b07a-7101c885d3d6",
      "name": "Weber - Brekke"
    },
    {
      "address": "285 Ernie Manor",
      "city": "Melyssamouth",
      "postalCode": "97272-6578",
      "phone": "1-291-791-3571 x712",
      "id": "bd3ba4ba-87b5-4052-9243-59af8e6be0b4",
      "name": "Gottlieb, Volkman and Fritsch",
      "country": "Holy See (Vatican City State)"
    },
    {
      "address": "3592 Cronin Courts",
      "city": "Croninton",
      "postalCode": "88507-3716",
      "phone": "838-621-2008 x91737",
      "id": "cfb60adb-3ac6-4495-acbf-d76a75ac09d7",
      "name": "Carroll, Heller and Howell",
      "country": "Aruba"
    },
    {
      "name": "Senger - Schiller",
      "country": "Sierra Leone",
      "address": "90251 Olson Tunnel",
      "city": "Port Jaymeberg",
      "postalCode": "61165",
      "phone": "(702) 400-7075 x808",
      "id": "9e1d4a09-d112-41ae-93c4-02d09fce95bd"
    },
    {
      "country": "Dominica",
      "address": "4061 Matilda Dam",
      "city": "Henderson",
      "postalCode": "93203",
      "phone": "367-498-6294 x061",
      "id": "db818448-ee00-4b74-b75e-3f0cc065e307",
      "name": "Walker LLC"
    },
    {
      "phone": "739-438-6466 x4363",
      "id": "a432f6f9-3e8a-4475-a564-ccb10ee2f8a2",
      "name": "Nikolaus and Sons",
      "country": "Heard Island and McDonald Islands",
      "address": "237 Elm Street",
      "city": "Kamrenside",
      "postalCode": "04641-8983"
    },
    {
      "id": "ef157e4c-c645-4ef1-918a-f9561e7a9f65",
      "name": "Goyette Group",
      "country": "Hong Kong",
      "address": "3357 Phoebe Manors",
      "city": "Lake Ridge",
      "postalCode": "02445-6728",
      "phone": "953.824.3603 x95007"
    },
    {
      "country": "French Southern Territories",
      "address": "13366 Agustina Divide",
      "city": "Mandystead",
      "postalCode": "05172",
      "phone": "(812) 828-2117 x99186",
      "id": "8b941d2c-e957-4880-9a1e-6909e5f75d87",
      "name": "Baumbach, Murazik and Aufderhar"
    },
    {
      "city": "East Mabelle",
      "postalCode": "81984-9683",
      "phone": "1-485-674-2733",
      "id": "6d143e3c-1fe2-4571-a9c7-db6b36ea2d0f",
      "name": "Hickle Group",
      "country": "Montenegro",
      "address": "284 Osinski Causeway"
    },
    {
      "phone": "652.809.1540 x373",
      "id": "6e6a6256-bb37-4527-86eb-d88b6b090e26",
      "name": "Sanford - Lueilwitz",
      "country": "Virgin Islands, U.S.",
      "address": "596 Antoinette Brook",
      "city": "Aufderharcester",
      "postalCode": "61522-8151"
    },
    {
      "id": "fa98098d-1bce-49d7-9dff-cafbc3cdbaf3",
      "name": "Kozey Group",
      "country": "Philippines",
      "address": "5671 Cindy Bridge",
      "city": "Jeanneberg",
      "postalCode": "92149",
      "phone": "854-359-0183 x4704"
    },
    {
      "city": "Ledatown",
      "postalCode": "58281-8751",
      "phone": "(770) 461-8144 x5214",
      "id": "47d23486-9d65-44cc-80fe-703238dbef49",
      "name": "Beier, Kunze and Witting",
      "country": "Iceland",
      "address": "8292 Rutherford Crest"
    },
    {
      "id": "ac6043ae-529c-486d-8045-c2d5ac59a760",
      "name": "Konopelski - Howe",
      "country": "Vanuatu",
      "address": "582 Linda Mill",
      "city": "Missoula",
      "postalCode": "92420-5368",
      "phone": "1-752-433-3626 x32776"
    },
    {
      "country": "Mauritius",
      "address": "51265 Ortiz Mews",
      "city": "Warner Robins",
      "postalCode": "26658",
      "phone": "(810) 303-9400 x070",
      "id": "01a28759-58ef-42cb-8d21-1a062f00e1ce",
      "name": "Becker Inc"
    },
    {
      "address": "673 Barton Route",
      "city": "Phoenix",
      "postalCode": "04408-3739",
      "phone": "994-978-7525 x2775",
      "id": "93cf8973-d915-4106-a45a-611072ada877",
      "name": "Roob - Rogahn",
      "country": "Ghana"
    },
    {
      "country": "Moldova",
      "address": "23884 6th Street",
      "city": "San Francisco",
      "postalCode": "08679",
      "phone": "(759) 474-5850 x23382",
      "id": "44c81a45-53aa-4d8b-958e-24e93b5228e4",
      "name": "Ullrich - Mohr"
    },
    {
      "address": "5428 Hermann Gardens",
      "city": "Savanahborough",
      "postalCode": "28697",
      "phone": "(643) 963-7388 x3712",
      "id": "12544d5d-46f3-4f96-b650-2839c65e1740",
      "name": "Mitchell, Bartoletti and Hudson",
      "country": "Yemen"
    },
    {
      "postalCode": "26347-2276",
      "phone": "534-706-9807 x55556",
      "id": "49264e3b-e2ea-4e48-ac81-a29df7891a1c",
      "name": "Hilll - Huel",
      "country": "Slovenia",
      "address": "704 Skiles Fall",
      "city": "Stoltenbergfield"
    },
    {
      "name": "Welch Inc",
      "country": "Cuba",
      "address": "32796 Center Road",
      "city": "Ritchiemouth",
      "postalCode": "36384-7458",
      "phone": "(838) 644-8016",
      "id": "b09604f8-5832-40d0-b856-a5b9f6dd9d66"
    },
    {
      "id": "6de9335e-fb58-41e4-964e-2b324e2cbf3c",
      "name": "Green, Collins and Gulgowski",
      "country": "Central African Republic",
      "address": "9146 School Close",
      "city": "South Jaquelin",
      "postalCode": "07928",
      "phone": "1-490-546-0605 x9956"
    },
    {
      "postalCode": "91244",
      "phone": "511-659-4095",
      "id": "9904abc5-2bb0-4f93-9782-d637800e26dd",
      "name": "Botsford, Crooks and Welch",
      "country": "Croatia",
      "address": "1883 Ullrich Court",
      "city": "Rosaleestead"
    },
    {
      "address": "958 Hal Bridge",
      "city": "Port Arthur",
      "postalCode": "75961-9407",
      "phone": "399-664-6711 x6415",
      "id": "a04287bc-dbc7-4c79-9245-b9524a8b6fa5",
      "name": "Halvorson Group",
      "country": "Saint Barthelemy"
    },
    {
      "postalCode": "80154-2642",
      "phone": "915.510.1332 x316",
      "id": "dcbc942f-c1ff-4183-bdd7-d9519d622e86",
      "name": "Goldner Group",
      "country": "Spain",
      "address": "6867 Funk Corner",
      "city": "Buffalo Grove"
    },
    {
      "address": "56012 Brookside",
      "city": "Joliet",
      "postalCode": "33990",
      "phone": "453-787-0288",
      "id": "96b70672-502d-4afa-b990-17c091b07d6f",
      "name": "Rice, Simonis and Botsford",
      "country": "Ethiopia"
    },
    {
      "postalCode": "59789",
      "phone": "1-858-241-0581 x97693",
      "id": "fa91606a-0141-4efa-820e-321bde8e7ce5",
      "name": "Purdy LLC",
      "country": "Puerto Rico",
      "address": "156 Danika Road",
      "city": "Adrainchester"
    },
    {
      "name": "Pacocha and Sons",
      "country": "Bolivia",
      "address": "40350 Lauren Drive",
      "city": "Koeppview",
      "postalCode": "90143-7880",
      "phone": "(796) 897-6101 x693",
      "id": "ac519387-505c-4b52-a8d3-773d3a0907c2"
    },
    {
      "id": "2cac0e25-aff1-423e-ad4a-fe9957fcedbc",
      "name": "Hand, Dooley and Homenick",
      "country": "Switzerland",
      "address": "889 S Mill Street",
      "city": "East Maximillianfurt",
      "postalCode": "00706",
      "phone": "1-326-321-1474 x622"
    },
    {
      "address": "699 Lafayette Canyon",
      "city": "West Glendabury",
      "postalCode": "32924",
      "phone": "1-751-359-0295 x6394",
      "id": "7575e624-8c15-4aee-aaf3-65110e179c26",
      "name": "Gibson Inc",
      "country": "Bolivia"
    },
    {
      "name": "Langosh, Ebert and Gleichner",
      "country": "Uzbekistan",
      "address": "3502 Porter Falls",
      "city": "West Palm Beach",
      "postalCode": "67792",
      "phone": "1-601-888-3924 x008",
      "id": "006cbef9-6170-42d5-90ef-f061db2d9ee7"
    },
    {
      "id": "723c46d4-1445-4e3a-9b22-b59cf1872ae8",
      "name": "Keeling - Baumbach",
      "country": "Mauritius",
      "address": "5058 Veterans Memorial Highway",
      "city": "Port Vergiecester",
      "postalCode": "57733-6287",
      "phone": "480-675-1139"
    },
    {
      "phone": "(634) 556-4150 x091",
      "id": "1d4da5b0-1ea1-43d8-be12-277595bb2a0a",
      "name": "Collins Group",
      "country": "Guernsey",
      "address": "4285 Bartell Curve",
      "city": "Mount Prospect",
      "postalCode": "10423"
    },
    {
      "country": "Indonesia",
      "address": "2466 Jayson Groves",
      "city": "West Eldridgecester",
      "postalCode": "30344-7962",
      "phone": "891.449.0595 x3265",
      "id": "77d6f9ab-e6b8-4bea-9cea-932f7db3189d",
      "name": "Osinski, Langworth and Hodkiewicz"
    },
    {
      "postalCode": "64259",
      "phone": "1-837-570-0432 x25712",
      "id": "274238d7-1f21-4731-a793-b15fd8a65d45",
      "name": "Hayes LLC",
      "country": "Belize",
      "address": "8493 Tremblay Branch",
      "city": "Fort Nova"
    },
    {
      "country": "Papua New Guinea",
      "address": "582 Leta Locks",
      "city": "Hahnburgh",
      "postalCode": "78763-6712",
      "phone": "(426) 256-3182",
      "id": "ce603e30-fffd-46ec-ab5a-e9d438b77953",
      "name": "Jerde LLC"
    },
    {
      "address": "72965 S East Street",
      "city": "Jacobsonfurt",
      "postalCode": "30465",
      "phone": "950-816-0286 x29106",
      "id": "f4aa33e4-edb5-4cee-8965-a75b6e9263e0",
      "name": "Wilderman Inc",
      "country": "Belgium"
    },
    {
      "postalCode": "60334-0239",
      "phone": "472.527.9193 x45762",
      "id": "cb744db0-6ff8-4bc0-add2-da4f63d8f321",
      "name": "Oberbrunner - Bednar",
      "country": "Saint Barthelemy",
      "address": "265 Aryanna Meadows",
      "city": "West Jillianview"
    },
    {
      "country": "Uruguay",
      "address": "398 Susana Viaduct",
      "city": "Strosinstead",
      "postalCode": "37514",
      "phone": "241.555.3952 x24103",
      "id": "8c5d6a54-48e4-4576-8163-af1bf1e67f09",
      "name": "Kerluke, Kreiger and Satterfield"
    }
  ],
  "teams": [
    {
      "name": "Bednar - Farrell",
      "colors": "lime",
      "address": "1311 Sipes Mills",
      "postalCode": "79038",
      "site": "https://frilly-halt.biz",
      "stadium": "Koss, Dooley and Morar",
      "organizationalUnitId": "1bd7e3b5-2c6a-42a4-91c3-2838d52c3d8e",
      "id": "d39ddeca-9adb-40e5-8764-5307d9ab00d3",
      "yearEstablished": 1988,
      "country": "Zimbabwe",
      "city": "New Brannonbury"
    },
    {
      "id": "c873f866-3323-4d8f-a685-fb968cdf136b",
      "yearEstablished": 2003,
      "address": "1655 S Main Street",
      "postalCode": "83626-2303",
      "stadium": "Nader, Becker and Auer",
      "organizationalUnitId": "322dac0d-f422-431f-a162-206131a1757b",
      "name": "Armstrong, Powlowski and Torp",
      "colors": "orange",
      "country": "Israel",
      "city": "Dothan",
      "site": "https://annual-nudge.name/"
    },
    {
      "name": "Dickinson and Sons",
      "yearEstablished": 1978,
      "postalCode": "89327-6982",
      "stadium": "Spencer LLC",
      "organizationalUnitId": "8c606df1-7251-4389-be58-244ef1b1066e",
      "id": "fce040ab-4d22-42f3-a05e-fb81a2c0cbb6",
      "colors": "mint green",
      "country": "Vietnam",
      "address": "453 Edward Street",
      "city": "Mayaguez",
      "site": "https://moral-rawhide.biz/"
    },
    {
      "site": "https://informal-scholarship.org/",
      "stadium": "Schmeler Group",
      "organizationalUnitId": "be2dd224-f907-4997-acad-301b9d7b4066",
      "id": "4d5922b3-f08f-498a-9dfd-cc98ad5f6b48",
      "country": "Nicaragua",
      "city": "Lake Beth",
      "address": "816 Ferne Ridge",
      "postalCode": "29070",
      "name": "Brekke - Treutel",
      "yearEstablished": 2016,
      "colors": "mint green"
    },
    {
      "id": "b5fae036-4aac-4dd7-94b2-4e7c31aa5968",
      "yearEstablished": 1996,
      "city": "East Rae",
      "stadium": "Orn, Steuber and Hirthe",
      "name": "Lindgren LLC",
      "colors": "turquoise",
      "country": "Yemen",
      "address": "77684 Schinner Ville",
      "postalCode": "31097-4906",
      "site": "https://intelligent-agreement.com/",
      "organizationalUnitId": "dd1923fa-fdc0-41cc-a783-2b01bd70e7cb"
    },
    {
      "yearEstablished": 1997,
      "colors": "pink",
      "postalCode": "64609-8930",
      "stadium": "Moen - Parker",
      "organizationalUnitId": "5fb1593e-5ee7-4b88-b567-4d93c161684a",
      "site": "https://squiggly-duster.net/",
      "id": "b3cb4b1f-2302-4769-8f45-c2e7b8f0ab86",
      "name": "Dooley, Gottlieb and Auer",
      "country": "Bulgaria",
      "address": "9140 W Church Street",
      "city": "Wolfshire"
    },
    {
      "yearEstablished": 2019,
      "address": "1735 Adah Walk",
      "site": "https://elderly-jellyfish.biz",
      "stadium": "Donnelly, Murray and Mosciski",
      "id": "cd076f11-6d0c-4bf3-b895-32705811f5f4",
      "name": "Murazik, Champlin and Lakin",
      "colors": "maroon",
      "country": "Christmas Island",
      "city": "Faustinocester",
      "postalCode": "57595-3996",
      "organizationalUnitId": "0eded65e-104f-4b36-964a-ca5485b33624"
    },
    {
      "colors": "black",
      "organizationalUnitId": "d204747a-ba27-48d3-bc9d-c8795bec906d",
      "country": "Myanmar",
      "address": "8885 S 8th Street",
      "city": "North Daphneytown",
      "postalCode": "35963-8179",
      "site": "https://vague-finer.info",
      "id": "4cb435c2-85ed-43fe-8cf9-0e2c642d075c",
      "name": "Purdy - Pacocha",
      "yearEstablished": 1988,
      "stadium": "Walsh, Will and Walter"
    },
    {
      "address": "21109 Hilpert Pines",
      "postalCode": "44075",
      "site": "https://oval-pliers.name",
      "country": "Benin",
      "name": "Towne, Durgan and Kertzmann",
      "yearEstablished": 1978,
      "colors": "white",
      "city": "East Abigayle",
      "stadium": "Cassin and Sons",
      "organizationalUnitId": "c3c02dde-b268-4b11-99b8-f7d74821e053",
      "id": "d5934946-f165-4c15-910a-402df60d1000"
    },
    {
      "id": "9fa32105-bc71-4ef2-bae4-05cd1232550a",
      "yearEstablished": 2007,
      "colors": "green",
      "country": "American Samoa",
      "address": "960 Alison Lights",
      "city": "New Neldastad",
      "postalCode": "15144-1204",
      "name": "Abernathy - Lakin",
      "site": "https://accomplished-eternity.info/",
      "stadium": "Mitchell Group",
      "organizationalUnitId": "77c93bc4-eb54-4eb5-81f0-89c23889483b"
    },
    {
      "colors": "orchid",
      "address": "2368 Emelie Plaza",
      "postalCode": "08929-6284",
      "site": "https://joyful-teammate.com",
      "organizationalUnitId": "cc3f10be-6dcf-4524-bc71-0f4b6ae0d2f9",
      "id": "63238ad4-9c5b-4c7b-aa94-095aa8f6661f",
      "name": "Kulas, Lynch and Trantow",
      "city": "Ludiebury",
      "stadium": "Greenholt and Sons",
      "yearEstablished": 1988,
      "country": "Honduras"
    },
    {
      "site": "https://negligible-deployment.com/",
      "id": "db81e4bf-ba3b-468f-b4ad-a891767b2a75",
      "name": "Olson, Koepp and Herzog",
      "yearEstablished": 2017,
      "address": "33200 Billy Radial",
      "postalCode": "44554-0231",
      "colors": "lavender",
      "country": "Chile",
      "city": "Richmondberg",
      "stadium": "Bayer - Grimes",
      "organizationalUnitId": "a1901139-c4b8-4dfe-9e36-40e4334576e1"
    },
    {
      "colors": "mint green",
      "address": "2934 Lockman Walk",
      "city": "Waukesha",
      "site": "https://rubbery-bourgeoisie.info/",
      "organizationalUnitId": "518b2f72-34ed-4e70-a387-0734a1d86f4a",
      "id": "3857ee45-fc91-4c8b-8d8d-d0bcb952a4d9",
      "yearEstablished": 1995,
      "country": "Mozambique",
      "postalCode": "98971-0153",
      "stadium": "Mitchell - Kirlin",
      "name": "Jakubowski - Kutch"
    },
    {
      "postalCode": "02577-0746",
      "site": "https://helpless-halt.net",
      "stadium": "Feeney, Thiel and Kling",
      "organizationalUnitId": "16752e9b-e1f8-4391-a1a1-faad616adf20",
      "id": "37b0a396-a3f0-47e2-a796-bb2d6df0c914",
      "name": "Kiehn - Beatty",
      "city": "Lake Isac",
      "address": "3251 Justen Trail",
      "yearEstablished": 1986,
      "colors": "violet",
      "country": "Saint Kitts and Nevis"
    },
    {
      "id": "2ad6c9a4-e9f4-4ed0-bcaa-87fb8afa03ac",
      "yearEstablished": 1990,
      "city": "New Lillyport",
      "site": "https://colorful-scout.biz/",
      "name": "Funk - Kub",
      "colors": "teal",
      "country": "Taiwan",
      "address": "227 S 14th Street",
      "postalCode": "81801-5809",
      "stadium": "Runte - Zboncak",
      "organizationalUnitId": "4eb305bb-ddf4-44e2-9951-aece46230e29"
    },
    {
      "organizationalUnitId": "09899c39-b417-4516-b8d4-b85eef0c95e7",
      "id": "152ccdea-7ec1-4007-9045-447d475b0a48",
      "name": "Stehr - Bosco",
      "country": "Turks and Caicos Islands",
      "address": "4324 Marge Overpass",
      "postalCode": "96583-4301",
      "yearEstablished": 1998,
      "colors": "purple",
      "city": "Websterland",
      "site": "https://our-castanet.net",
      "stadium": "Connelly Group"
    },
    {
      "id": "659f63af-e6f9-49c6-9b74-21ca8e34fb63",
      "yearEstablished": 1995,
      "address": "3291 Hall Lane",
      "postalCode": "68695",
      "site": "https://judicious-devil.net",
      "organizationalUnitId": "2721cb7c-5174-47e5-90d8-fa2e3be2b6ce",
      "name": "Hagenes, Wisozk and Monahan",
      "colors": "plum",
      "country": "Kiribati",
      "city": "Rockville",
      "stadium": "Jacobs - Kuvalis"
    },
    {
      "stadium": "Cruickshank - Mosciski",
      "organizationalUnitId": "db02e411-f6cb-44d7-80ce-884c6760e135",
      "colors": "grey",
      "country": "Eswatini",
      "yearEstablished": 1976,
      "address": "83485 Araceli Spurs",
      "city": "Schaeferbury",
      "postalCode": "26406-4953",
      "site": "https://lazy-gradient.com/",
      "id": "1170a70f-277b-4ad6-82ce-7af41aea4ac7",
      "name": "Armstrong, Collins and Hermann"
    },
    {
      "stadium": "Williamson - Davis",
      "name": "Schinner - Hermiston",
      "yearEstablished": 1990,
      "site": "https://alert-scorpion.biz",
      "address": "761 Church Hill",
      "city": "Port Juana",
      "postalCode": "60721-3926",
      "organizationalUnitId": "9181b772-12e7-463e-bb6b-83d9e202a136",
      "id": "f31bc63d-7db2-4388-8db8-ff17045ee1ea",
      "colors": "pink",
      "country": "Mexico"
    },
    {
      "postalCode": "31275",
      "site": "https://standard-forgery.info/",
      "stadium": "Trantow - Zulauf",
      "organizationalUnitId": "1cec44eb-5c9d-4869-8474-dadd541792cf",
      "id": "3ccfdc86-65cc-423e-b31e-d52cdc3a2f64",
      "address": "82280 Birch Grove",
      "colors": "pink",
      "country": "Luxembourg",
      "city": "Kubchester",
      "name": "Shields, Wisoky and Runolfsdottir",
      "yearEstablished": 1995
    },
    {
      "name": "Bergnaum Inc",
      "yearEstablished": 1975,
      "colors": "orchid",
      "country": "Eswatini",
      "organizationalUnitId": "acf332ca-c5c4-4d49-b3b7-7c5f04c57a75",
      "id": "e21d51f2-e4b4-4c35-8cc3-9a8f672df023",
      "address": "2428 8th Street",
      "city": "Sigurdport",
      "postalCode": "75482",
      "site": "https://unusual-premeditation.com/",
      "stadium": "Nader, Halvorson and Considine"
    },
    {
      "address": "6256 Cooper Trail",
      "city": "North Lewhaven",
      "name": "Sanford - Schoen",
      "yearEstablished": 2018,
      "country": "Grenada",
      "postalCode": "40317",
      "site": "https://functional-wafer.org",
      "stadium": "Willms - Bernier",
      "organizationalUnitId": "af3d4b34-0351-4aec-9727-adcb7984f929",
      "id": "aaeee7e2-587e-4350-9e3b-97afeadb747d",
      "colors": "orchid"
    },
    {
      "id": "79bb34ab-2e1d-4c2a-b25a-4add12921bbd",
      "country": "Cambodia",
      "address": "5457 Sydney Cliffs",
      "site": "https://basic-responsibility.com/",
      "stadium": "Lemke and Sons",
      "organizationalUnitId": "61816320-2621-4197-ad20-42e870cef633",
      "name": "Gutkowski - Koss",
      "yearEstablished": 1985,
      "colors": "maroon",
      "city": "South Whittier",
      "postalCode": "40047"
    },
    {
      "organizationalUnitId": "beb3024c-0a11-49e2-b305-4d3784d4d69c",
      "name": "Bartell, Waters and Runolfsdottir",
      "yearEstablished": 2002,
      "country": "Cook Islands",
      "address": "237 Schmidt Rapid",
      "city": "West Hardy",
      "postalCode": "68521-5566",
      "site": "https://supportive-cope.biz/",
      "id": "72941fd7-12c0-4bad-a131-258d3b4e4270",
      "colors": "grey",
      "stadium": "Bins - Schneider"
    },
    {
      "city": "Kleinshire",
      "postalCode": "23334",
      "site": "https://juvenile-kielbasa.biz/",
      "id": "88a98ac4-d375-40b8-9ebd-c856388054b5",
      "name": "Zemlak - Leannon",
      "colors": "orchid",
      "country": "Timor-Leste",
      "yearEstablished": 2013,
      "address": "21721 Jaeden Lakes",
      "stadium": "Emard, Heidenreich and Turcotte",
      "organizationalUnitId": "f136ad1b-4969-4e4d-8456-bd18553728a2"
    },
    {
      "id": "cc305665-9a7c-4b5d-b6fb-a4e1475eade4",
      "name": "Jones - Franecki",
      "address": "6071 Oak Drive",
      "city": "Roweville",
      "stadium": "Maggio LLC",
      "yearEstablished": 2018,
      "colors": "lavender",
      "country": "Indonesia",
      "postalCode": "37310",
      "site": "https://well-to-do-summary.net/",
      "organizationalUnitId": "a1096ba6-9186-4bf2-bbea-7f41a8120de7"
    },
    {
      "city": "Port Katharinaside",
      "id": "049ac8bc-93af-49ac-b020-e981eef0a938",
      "yearEstablished": 2008,
      "colors": "plum",
      "country": "Bosnia and Herzegovina",
      "address": "3217 Sanford Wall",
      "name": "Dibbert - Prosacco",
      "postalCode": "62444",
      "site": "https://woeful-maintainer.name",
      "stadium": "Shanahan - Greenholt",
      "organizationalUnitId": "504f4777-f5a7-4ef2-a275-df174040b706"
    },
    {
      "stadium": "Gleichner Inc",
      "organizationalUnitId": "c70185b2-3540-46c3-8a18-6ecd2d6e07f3",
      "name": "Schoen - Hyatt",
      "yearEstablished": 1979,
      "colors": "indigo",
      "city": "East Elnaland",
      "site": "https://grandiose-developmental.org",
      "id": "961ed705-f788-44c4-98f6-096672dc155f",
      "country": "Zimbabwe",
      "address": "18909 Simone Corner",
      "postalCode": "81246"
    },
    {
      "yearEstablished": 2012,
      "colors": "magenta",
      "city": "New Janessa",
      "organizationalUnitId": "d6005a5e-c34a-48a7-8fd1-f8bbdfe61214",
      "id": "a49d8843-9296-4b63-9b44-589900d94771",
      "name": "Stark - Gorczany",
      "postalCode": "21038",
      "site": "https://frizzy-hunt.biz",
      "stadium": "Lebsack - Hartmann",
      "country": "Jamaica",
      "address": "7210 Roma Harbors"
    },
    {
      "city": "Fadelstad",
      "id": "d311108b-47fe-406f-a3b8-c2afb1db94d3",
      "yearEstablished": 1994,
      "country": "Lao People's Democratic Republic",
      "address": "4783 Murray Grove",
      "stadium": "Hyatt, Borer and Schinner",
      "organizationalUnitId": "8c606df1-7251-4389-be58-244ef1b1066e",
      "name": "Pollich, Wilderman and Wyman",
      "colors": "lime",
      "postalCode": "73202",
      "site": "https://self-reliant-velocity.biz/"
    },
    {
      "city": "Fort Carol",
      "postalCode": "52520-9983",
      "id": "92f7b768-e42f-4b0e-9e22-9c4cab8f5eeb",
      "name": "Mante - Breitenberg",
      "yearEstablished": 2004,
      "colors": "yellow",
      "country": "Australia",
      "address": "745 Katelynn Estates",
      "site": "https://white-fowl.net",
      "stadium": "Jacobs Inc",
      "organizationalUnitId": "7785ade0-707c-4fc3-9e5c-f4c3f2518799"
    },
    {
      "site": "https://oblong-loaf.org",
      "yearEstablished": 1980,
      "colors": "green",
      "address": "163 Fisher Summit",
      "city": "Lynchshire",
      "stadium": "Barrows, Aufderhar and Schmitt",
      "organizationalUnitId": "ae6682ab-d06d-47eb-b5dc-7b3767cb5def",
      "id": "b8b61c10-27da-4514-8d83-5b9e290a51df",
      "name": "Bradtke, Keeling and Grimes",
      "country": "Austria",
      "postalCode": "00543"
    },
    {
      "city": "North Tyshawnworth",
      "postalCode": "47697",
      "site": "https://helpful-clamp.info/",
      "id": "42942702-88bc-45fc-8e1e-05860c1c18c6",
      "yearEstablished": 1974,
      "colors": "grey",
      "country": "Pakistan",
      "address": "174 S 9th Street",
      "organizationalUnitId": "e55c032d-36b0-4a5a-aea6-ffef2aa5065c",
      "name": "Skiles, Rice and Roberts",
      "stadium": "Bartoletti - Greenfelder"
    },
    {
      "name": "Weber LLC",
      "yearEstablished": 2018,
      "colors": "gold",
      "postalCode": "17980",
      "site": "https://pitiful-slipper.org/",
      "organizationalUnitId": "a8994a96-da6d-4853-8bd6-8f75d585c7a4",
      "id": "a29ab6fa-4161-4976-8ca8-224cf682243d",
      "country": "Myanmar",
      "address": "54204 Cummings Forge",
      "city": "Port Santos",
      "stadium": "Parisian - Schmitt"
    },
    {
      "postalCode": "65785-3250",
      "site": "https://darling-experience.com",
      "stadium": "Langworth, Schneider and Hudson",
      "organizationalUnitId": "be2dd224-f907-4997-acad-301b9d7b4066",
      "yearEstablished": 2007,
      "city": "East Bonnie",
      "colors": "red",
      "country": "Macao",
      "address": "608 Collins Via",
      "id": "0ea91774-3d54-43ff-a37b-742a2f9456e6",
      "name": "Wunsch, Hermiston and Rogahn"
    },
    {
      "id": "da0881ec-9c27-495d-9ec7-7c0bd63f81ad",
      "yearEstablished": 1987,
      "postalCode": "91648-1765",
      "site": "https://palatable-pecan.name",
      "stadium": "Gutkowski, Hermiston and Hintz",
      "organizationalUnitId": "cfb60adb-3ac6-4495-acbf-d76a75ac09d7",
      "name": "Schneider - Hauck",
      "colors": "plum",
      "country": "Luxembourg",
      "address": "28716 Morissette Camp",
      "city": "Thornton"
    },
    {
      "yearEstablished": 2008,
      "colors": "ivory",
      "country": "Lithuania",
      "city": "La Habra",
      "stadium": "Gutkowski and Sons",
      "organizationalUnitId": "9e1d4a09-d112-41ae-93c4-02d09fce95bd",
      "id": "59552e60-959a-432a-a04d-3e02d95a5ea8",
      "name": "Russel - O'Kon",
      "site": "https://near-information.net/",
      "address": "35325 Murray Burgs",
      "postalCode": "31375"
    },
    {
      "postalCode": "59439-4738",
      "yearEstablished": 2004,
      "colors": "teal",
      "country": "Djibouti",
      "address": "55632 Goodwin Knolls",
      "city": "South Faymouth",
      "site": "https://pink-other.name/",
      "stadium": "Dickinson, Langosh and Bode",
      "organizationalUnitId": "f136ad1b-4969-4e4d-8456-bd18553728a2",
      "id": "70a62385-c820-4ebd-ae92-dd9d8b937cc6",
      "name": "Schaden LLC"
    },
    {
      "yearEstablished": 2017,
      "city": "Port Danielaton",
      "site": "https://kooky-availability.net/",
      "stadium": "Emmerich, Upton and Rempel",
      "organizationalUnitId": "4b26d160-a8e4-42d4-9f2c-81d6b907b8be",
      "id": "c8979a0d-072b-4765-9d51-e83b446f60fa",
      "name": "Douglas - Altenwerth",
      "colors": "lavender",
      "country": "Rwanda",
      "address": "388 Myrna Viaduct",
      "postalCode": "98017-8975"
    },
    {
      "address": "20301 Church Avenue",
      "city": "Fort Irmaland",
      "site": "https://educated-colonialism.com",
      "stadium": "Bashirian - Leuschke",
      "id": "23127bd3-fc74-4c05-a805-df59b2906bed",
      "name": "Torphy - Homenick",
      "yearEstablished": 1980,
      "colors": "cyan",
      "country": "Mali",
      "postalCode": "88887-4016",
      "organizationalUnitId": "77c93bc4-eb54-4eb5-81f0-89c23889483b"
    },
    {
      "city": "Estellshire",
      "postalCode": "85762-0903",
      "site": "https://lost-bathhouse.name/",
      "id": "7c4a677c-9054-4309-940e-2ebbfbce4af5",
      "yearEstablished": 1993,
      "country": "Falkland Islands (Malvinas)",
      "stadium": "Schaden, Walter and Nitzsche",
      "organizationalUnitId": "61816320-2621-4197-ad20-42e870cef633",
      "name": "Crona - West",
      "colors": "violet",
      "address": "322 Hirthe Overpass"
    },
    {
      "colors": "ivory",
      "address": "892 Spinka Knoll",
      "city": "South Norwoodworth",
      "site": "https://sizzling-advancement.biz/",
      "organizationalUnitId": "878eddac-f2ad-452d-b07a-7101c885d3d6",
      "yearEstablished": 2021,
      "name": "Stehr, Haag and Brekke",
      "country": "Sint Maarten",
      "postalCode": "15514-5638",
      "stadium": "Ratke and Sons",
      "id": "b423b3e5-3c10-4c25-93e7-6a4857c753e7"
    },
    {
      "colors": "fuchsia",
      "city": "North Anabelle",
      "stadium": "Renner, Thompson and Schultz",
      "id": "4c216fef-036b-4f3f-bcf7-41386ab588f7",
      "name": "Ryan - Nicolas",
      "address": "73002 Bedford Road",
      "postalCode": "29342-7490",
      "site": "https://big-dwell.info",
      "organizationalUnitId": "6e6a6256-bb37-4527-86eb-d88b6b090e26",
      "yearEstablished": 2003,
      "country": "Cote d'Ivoire"
    },
    {
      "yearEstablished": 1990,
      "colors": "mint green",
      "city": "Gary",
      "postalCode": "21129",
      "stadium": "Altenwerth, Beatty and Kuphal",
      "id": "d7265ad0-f114-458d-bff4-693b1fc09173",
      "country": "Yemen",
      "address": "6345 Wuckert Fields",
      "site": "https://enraged-caption.name/",
      "organizationalUnitId": "acf332ca-c5c4-4d49-b3b7-7c5f04c57a75",
      "name": "Morissette, O'Conner and Doyle"
    },
    {
      "name": "Stoltenberg, O'Connell and Kling",
      "colors": "azure",
      "country": "Georgia",
      "organizationalUnitId": "ac6043ae-529c-486d-8045-c2d5ac59a760",
      "site": "https://shocked-grandpa.net",
      "stadium": "Gibson - Rutherford",
      "id": "274488ef-5d94-41a5-b85a-593ac1a345b8",
      "yearEstablished": 1990,
      "address": "90275 E 3rd Street",
      "city": "West Hayleecester",
      "postalCode": "19834"
    },
    {
      "yearEstablished": 2019,
      "address": "2327 Brekke Forges",
      "city": "Windlercester",
      "postalCode": "39999",
      "site": "https://prime-pearl.org",
      "id": "47f6a3f8-0f76-44eb-9a35-17221738e780",
      "name": "Ortiz - Balistreri",
      "colors": "yellow",
      "country": "Belarus",
      "stadium": "Harvey, Wyman and Waelchi",
      "organizationalUnitId": "09899c39-b417-4516-b8d4-b85eef0c95e7"
    },
    {
      "name": "Homenick - Lemke",
      "yearEstablished": 1979,
      "colors": "white",
      "country": "Oman",
      "address": "134 The Orchard",
      "city": "West Reneeview",
      "site": "https://international-fisherman.name/",
      "id": "02ef03eb-44f3-40d4-86e9-a69b4d9e0cbe",
      "organizationalUnitId": "4eb305bb-ddf4-44e2-9951-aece46230e29",
      "stadium": "Lakin, Johnson and Stehr",
      "postalCode": "12094-1401"
    },
    {
      "colors": "turquoise",
      "country": "Kiribati",
      "site": "https://granular-comestible.net/",
      "id": "9e9a93d0-fdf7-40f6-ac19-442735dd4a9e",
      "name": "Spinka Group",
      "yearEstablished": 1976,
      "stadium": "Swaniawski - Schmeler",
      "organizationalUnitId": "a432f6f9-3e8a-4475-a564-ccb10ee2f8a2",
      "address": "66718 Alia Motorway",
      "city": "North Susana",
      "postalCode": "55110"
    },
    {
      "city": "Marietta",
      "stadium": "Glover, Corkery and Sanford",
      "organizationalUnitId": "d6005a5e-c34a-48a7-8fd1-f8bbdfe61214",
      "name": "Schaden - Crist",
      "address": "72057 Glover Prairie",
      "colors": "olive",
      "country": "Lebanon",
      "postalCode": "12969",
      "site": "https://lively-league.net",
      "id": "dd0ff797-c165-424d-8730-7a5d3bed1162",
      "yearEstablished": 1995
    },
    {
      "yearEstablished": 2017,
      "colors": "red",
      "country": "Sint Maarten",
      "address": "45697 W North Street",
      "postalCode": "22550",
      "site": "https://clean-alert.info",
      "stadium": "Prohaska - Parisian",
      "name": "Little - Schultz",
      "city": "Milford",
      "organizationalUnitId": "49264e3b-e2ea-4e48-ac81-a29df7891a1c",
      "id": "f279763a-a080-48cd-b3a7-c0f062917bc5"
    },
    {
      "name": "Pfeffer - Altenwerth",
      "yearEstablished": 1992,
      "country": "Afghanistan",
      "address": "66598 Shields Orchard",
      "city": "Moentown",
      "postalCode": "76850",
      "stadium": "Heaney and Sons",
      "id": "da5cabe1-b309-487d-9e12-4898acdc4106",
      "organizationalUnitId": "b09604f8-5832-40d0-b856-a5b9f6dd9d66",
      "site": "https://plain-boulevard.info/",
      "colors": "lavender"
    },
    {
      "name": "Crooks, Swaniawski and Ankunding",
      "yearEstablished": 2014,
      "postalCode": "44860",
      "site": "https://blushing-retrospectivity.org",
      "stadium": "Keeling and Sons",
      "organizationalUnitId": "9904abc5-2bb0-4f93-9782-d637800e26dd",
      "id": "c46d8be5-e520-47a2-aa02-defcfafbc789",
      "colors": "pink",
      "country": "Brazil",
      "address": "5559 Willard Divide",
      "city": "Kundeview"
    },
    {
      "colors": "green",
      "yearEstablished": 1975,
      "name": "Nicolas - Cummings",
      "country": "Botswana",
      "address": "4828 Princes Street",
      "city": "Kohlerview",
      "postalCode": "19082-3113",
      "site": "https://stiff-pendant.name",
      "stadium": "Collins, Hickle and Dietrich",
      "id": "0df7094f-69d1-4fdc-83b3-019d0244b89a",
      "organizationalUnitId": "9181b772-12e7-463e-bb6b-83d9e202a136"
    },
    {
      "colors": "silver",
      "site": "https://distinct-hope.net/",
      "country": "United Kingdom",
      "address": "37971 Locust Street",
      "city": "Ryleyport",
      "postalCode": "90494-7335",
      "stadium": "Hilll LLC",
      "id": "22889b32-8171-45a7-a67f-8b79244f640e",
      "name": "Leffler - O'Connell",
      "yearEstablished": 2011,
      "organizationalUnitId": "504f4777-f5a7-4ef2-a275-df174040b706"
    },
    {
      "name": "Wehner LLC",
      "yearEstablished": 1997,
      "colors": "white",
      "stadium": "Walker, Pagac and Hoppe",
      "organizationalUnitId": "af3d4b34-0351-4aec-9727-adcb7984f929",
      "id": "2dca1612-7ba6-4915-a188-1fb2c799fcd5",
      "country": "Benin",
      "address": "6050 Long Lane",
      "city": "Fort Christopview",
      "postalCode": "69920-9320",
      "site": "https://powerful-vista.biz/"
    },
    {
      "country": "Portugal",
      "address": "253 Ash Close",
      "city": "Haagstead",
      "postalCode": "56177-2861",
      "site": "https://steep-turret.biz",
      "stadium": "Trantow - Daugherty",
      "organizationalUnitId": "96b70672-502d-4afa-b990-17c091b07d6f",
      "name": "Haley - Braun",
      "yearEstablished": 1976,
      "colors": "lime",
      "id": "102dac84-9849-4b55-aeca-0d9a06f1d97e"
    },
    {
      "id": "7b4fd2f5-5cf3-4957-8266-11937c406003",
      "city": "South Kimberly",
      "site": "https://frightened-caption.info",
      "stadium": "Bailey, Rice and McDermott",
      "name": "Harber, Streich and Beier",
      "yearEstablished": 2005,
      "colors": "grey",
      "country": "Cook Islands",
      "address": "99774 Hawthorn Close",
      "postalCode": "85571-7267",
      "organizationalUnitId": "beb3024c-0a11-49e2-b305-4d3784d4d69c"
    },
    {
      "organizationalUnitId": "ac519387-505c-4b52-a8d3-773d3a0907c2",
      "id": "40511520-963e-4908-8c79-996891b633ad",
      "name": "Goodwin and Sons",
      "yearEstablished": 1992,
      "city": "Lowell",
      "postalCode": "81446-5283",
      "site": "https://abandoned-freight.com",
      "stadium": "Dietrich - Baumbach",
      "colors": "grey",
      "country": "Morocco",
      "address": "3719 E Broadway"
    },
    {
      "country": "Cocos (Keeling) Islands",
      "address": "349 Coty Ville",
      "city": "Rancho Cucamonga",
      "postalCode": "39108",
      "id": "42ac5fbc-ac7a-41b1-bd9d-993b3f525c62",
      "name": "Cummings, Harris and Abernathy",
      "colors": "blue",
      "organizationalUnitId": "6e28dc40-4932-44de-bad6-d5b809106b96",
      "yearEstablished": 2002,
      "site": "https://grandiose-density.name",
      "stadium": "Rau - Denesik"
    },
    {
      "stadium": "Deckow, Mohr and Zulauf",
      "name": "Heller - Boyle",
      "yearEstablished": 2012,
      "colors": "orange",
      "country": "Romania",
      "postalCode": "31937",
      "site": "https://nervous-tributary.biz",
      "id": "5bfbf3ad-ffff-417b-a966-8738ff936ba9",
      "address": "2169 Kailee Highway",
      "city": "East Maxwelltown",
      "organizationalUnitId": "7575e624-8c15-4aee-aaf3-65110e179c26"
    },
    {
      "stadium": "Trantow Inc",
      "city": "New Diana",
      "name": "Beer, Gottlieb and Nienow",
      "yearEstablished": 2005,
      "colors": "yellow",
      "country": "Uzbekistan",
      "address": "2212 Giovanni Ramp",
      "postalCode": "65377",
      "site": "https://remorseful-agreement.biz/",
      "id": "378e06da-86cb-4595-8de3-0aafa8bac6b1",
      "organizationalUnitId": "1d4da5b0-1ea1-43d8-be12-277595bb2a0a"
    },
    {
      "organizationalUnitId": "77c93bc4-eb54-4eb5-81f0-89c23889483b",
      "id": "03faf5b5-d33d-4500-8f83-537de6022bb9",
      "yearEstablished": 1975,
      "country": "Svalbard & Jan Mayen Islands",
      "city": "Rocky Mount",
      "postalCode": "04949-7410",
      "site": "https://circular-goat.name",
      "name": "Erdman and Sons",
      "colors": "sky blue",
      "address": "22201 Waelchi Harbor",
      "stadium": "O'Conner - Torphy"
    },
    {
      "postalCode": "57491-3231",
      "site": "https://zealous-wallaby.biz",
      "id": "b5ba98dd-1541-4faa-9882-76aff670f491",
      "name": "Carter, Mosciski and Effertz",
      "yearEstablished": 1991,
      "country": "Palestine",
      "city": "Fort Hosealand",
      "colors": "azure",
      "address": "9186 The Mews",
      "stadium": "Okuneva - Sauer",
      "organizationalUnitId": "c3c02dde-b268-4b11-99b8-f7d74821e053"
    },
    {
      "name": "Haley, Dach and Kohler",
      "yearEstablished": 2001,
      "address": "234 The Rise",
      "stadium": "Reilly Inc",
      "organizationalUnitId": "5fb1593e-5ee7-4b88-b567-4d93c161684a",
      "id": "5d702a79-80c1-4ccd-bb6d-f612988e1b9f",
      "country": "Namibia",
      "city": "Duluth",
      "postalCode": "44030-6395",
      "site": "https://young-help.net/",
      "colors": "sky blue"
    },
    {
      "yearEstablished": 2001,
      "city": "North Mortimer",
      "site": "https://sudden-eyeliner.com",
      "id": "4127f32d-0135-4c1a-96f4-0f4745e47f01",
      "colors": "blue",
      "country": "Heard Island and McDonald Islands",
      "address": "864 Kautzer Glens",
      "postalCode": "70789-9922",
      "stadium": "Koss - Bode",
      "organizationalUnitId": "6d143e3c-1fe2-4571-a9c7-db6b36ea2d0f",
      "name": "Waters - Rice"
    },
    {
      "name": "Schmeler, Cronin and Effertz",
      "yearEstablished": 2012,
      "address": "98869 Collier Valleys",
      "city": "Moorehaven",
      "postalCode": "19713",
      "stadium": "Fisher - McLaughlin",
      "id": "d7e7e13d-3b96-4515-9eba-10be3a548f1e",
      "colors": "grey",
      "country": "France",
      "site": "https://first-exploration.info/",
      "organizationalUnitId": "dd1923fa-fdc0-41cc-a783-2b01bd70e7cb"
    },
    {
      "name": "Moore, Kerluke and Blanda",
      "colors": "maroon",
      "address": "58234 Estevan Fall",
      "city": "Freemanbury",
      "postalCode": "01761-6581",
      "stadium": "Armstrong - Koelpin",
      "id": "7814e740-2527-4447-b591-eeba525fdd34",
      "country": "Falkland Islands (Malvinas)",
      "site": "https://knotty-substitution.net",
      "organizationalUnitId": "cfb60adb-3ac6-4495-acbf-d76a75ac09d7",
      "yearEstablished": 1997
    },
    {
      "yearEstablished": 1990,
      "colors": "ivory",
      "address": "405 Frances Rue",
      "stadium": "Kreiger - Kreiger",
      "organizationalUnitId": "f4aa33e4-edb5-4cee-8965-a75b6e9263e0",
      "id": "6a1d5016-f053-49cb-9822-e897cd0dfe34",
      "name": "Jenkins - Rice",
      "country": "Republic of Korea",
      "city": "Weymouth Town",
      "postalCode": "95664-6767",
      "site": "https://ignorant-igloo.net"
    },
    {
      "site": "https://funny-sushi.name",
      "yearEstablished": 2014,
      "colors": "plum",
      "country": "El Salvador",
      "city": "West Adolfo",
      "stadium": "Renner and Sons",
      "organizationalUnitId": "be2dd224-f907-4997-acad-301b9d7b4066",
      "id": "2d6dd6c5-7ee6-4609-a215-33aabd4d1a93",
      "name": "Cremin - Wiegand",
      "address": "57261 S Walnut Street",
      "postalCode": "63974"
    },
    {
      "name": "Davis LLC",
      "colors": "orchid",
      "city": "North Miami",
      "postalCode": "71551-5446",
      "stadium": "Kohler, Reichel and Lebsack",
      "organizationalUnitId": "8b941d2c-e957-4880-9a1e-6909e5f75d87",
      "id": "3a210445-32ee-4a12-b234-96810b3c8731",
      "yearEstablished": 2006,
      "country": "Saint Martin",
      "address": "735 6th Avenue",
      "site": "https://rural-shipper.biz"
    }
  ],
  "leagues": [
    {
      "level": 9,
      "organizationalUnitId": "1bd7e3b5-2c6a-42a4-91c3-2838d52c3d8e",
      "id": "aed6c52b-31d4-4701-b2ac-0c0605f5efd9",
      "name": "Kozey LLC",
      "active": false
    },
    {
      "id": "d263f688-5721-46c9-8da9-3ea069c72198",
      "name": "Howe, Hessel and McLaughlin",
      "active": true,
      "level": 2,
      "organizationalUnitId": "8c606df1-7251-4389-be58-244ef1b1066e"
    },
    {
      "level": 0,
      "organizationalUnitId": "322dac0d-f422-431f-a162-206131a1757b",
      "id": "ff911798-9176-4818-8eed-2dd7660c0826",
      "name": "Stiedemann Inc",
      "active": false
    },
    {
      "id": "865dc3a6-8095-414c-8534-49a0522fc22d",
      "name": "Stark - Jerde",
      "active": false,
      "level": 9,
      "organizationalUnitId": "5fb1593e-5ee7-4b88-b567-4d93c161684a"
    },
    {
      "organizationalUnitId": "be2dd224-f907-4997-acad-301b9d7b4066",
      "id": "69d50685-8d5e-45a9-af23-5369591a9826",
      "name": "Vandervort Group",
      "active": true,
      "level": 2
    },
    {
      "id": "4b188c35-801b-4537-8644-c7fd1069230f",
      "name": "Schuppe, Von and Anderson",
      "active": false,
      "level": 1,
      "organizationalUnitId": "dd1923fa-fdc0-41cc-a783-2b01bd70e7cb"
    },
    {
      "active": true,
      "level": 2,
      "organizationalUnitId": "b140eedf-b38e-4954-ab9b-0f352a1fd9e3",
      "id": "57a929c0-0971-462c-9027-478f64a58a59",
      "name": "Armstrong - Morissette"
    },
    {
      "organizationalUnitId": "0eded65e-104f-4b36-964a-ca5485b33624",
      "id": "a731dab6-7486-4aaa-81d8-38a636abc11a",
      "name": "Johnson Group",
      "active": true,
      "level": 3
    },
    {
      "id": "10d825f5-f4be-44b1-8b3e-ad087a44a109",
      "name": "Gorczany, Bayer and Schulist",
      "active": false,
      "level": 8,
      "organizationalUnitId": "d204747a-ba27-48d3-bc9d-c8795bec906d"
    },
    {
      "name": "Balistreri, VonRueden and Nicolas",
      "active": true,
      "level": 8,
      "organizationalUnitId": "c3c02dde-b268-4b11-99b8-f7d74821e053",
      "id": "c76323ed-7502-4f6b-a7ba-e9d0c550a3e6"
    },
    {
      "name": "Roberts, Paucek and Abernathy",
      "active": false,
      "level": 8,
      "organizationalUnitId": "bf1d1c69-d674-4d16-a881-ace7432b7c42",
      "id": "4356792c-b081-4dc2-940c-b2ca7652b3d7"
    },
    {
      "active": false,
      "level": 9,
      "organizationalUnitId": "77c93bc4-eb54-4eb5-81f0-89c23889483b",
      "id": "a946061a-d974-40d2-8f40-31713cd7c678",
      "name": "D'Amore, Schamberger and Monahan"
    },
    {
      "name": "Brown, Rath and Prohaska",
      "active": false,
      "level": 8,
      "organizationalUnitId": "cc3f10be-6dcf-4524-bc71-0f4b6ae0d2f9",
      "id": "9b5a91d3-c5f6-484b-8230-d004ec527ed7"
    },
    {
      "organizationalUnitId": "a1901139-c4b8-4dfe-9e36-40e4334576e1",
      "id": "7f73985a-8793-4c2a-8d27-c245e32f37ce",
      "name": "Hahn - Franey",
      "active": false,
      "level": 9
    },
    {
      "id": "be6f3f39-35b3-4634-9576-70e903778dd8",
      "name": "Kertzmann, Wilkinson and Osinski",
      "active": true,
      "level": 8,
      "organizationalUnitId": "518b2f72-34ed-4e70-a387-0734a1d86f4a"
    },
    {
      "active": false,
      "level": 4,
      "organizationalUnitId": "16752e9b-e1f8-4391-a1a1-faad616adf20",
      "id": "7a4959bb-b815-494f-b642-4c21ce4a438b",
      "name": "Littel and Sons"
    },
    {
      "active": true,
      "level": 9,
      "organizationalUnitId": "4eb305bb-ddf4-44e2-9951-aece46230e29",
      "id": "4f5aeae5-4d30-40ad-8449-64e7eb5128c0",
      "name": "Ondricka, Bode and Hills"
    },
    {
      "id": "ef86383e-b7ee-413e-b89e-f5e72c92b017",
      "name": "Murphy - Bernhard",
      "active": false,
      "level": 9,
      "organizationalUnitId": "09899c39-b417-4516-b8d4-b85eef0c95e7"
    },
    {
      "organizationalUnitId": "2721cb7c-5174-47e5-90d8-fa2e3be2b6ce",
      "id": "20b749c7-b765-4a1a-b0d6-92dfd84a92fc",
      "name": "VonRueden, Mayer and Pacocha",
      "active": true,
      "level": 4
    },
    {
      "organizationalUnitId": "a8994a96-da6d-4853-8bd6-8f75d585c7a4",
      "id": "f72508ec-f151-48f1-924b-ac2497f5359f",
      "name": "Oberbrunner Inc",
      "active": false,
      "level": 4
    },
    {
      "active": true,
      "level": 5,
      "organizationalUnitId": "db02e411-f6cb-44d7-80ce-884c6760e135",
      "id": "91dd7d00-68a7-46fd-a693-cda1fc576da7",
      "name": "Armstrong and Sons"
    },
    {
      "id": "3835c78e-8f96-4710-927a-b19ea3711ad3",
      "name": "Rohan Group",
      "active": true,
      "level": 1,
      "organizationalUnitId": "1cec44eb-5c9d-4869-8474-dadd541792cf"
    },
    {
      "id": "3218d06a-6cac-4bee-bad7-5f3b3b13d782",
      "name": "Wehner - Heaney",
      "active": true,
      "level": 6,
      "organizationalUnitId": "9181b772-12e7-463e-bb6b-83d9e202a136"
    },
    {
      "active": true,
      "level": 4,
      "organizationalUnitId": "61816320-2621-4197-ad20-42e870cef633",
      "id": "3b033579-c138-45c6-ab43-78df312b140b",
      "name": "Goldner and Sons"
    },
    {
      "active": true,
      "level": 6,
      "organizationalUnitId": "acf332ca-c5c4-4d49-b3b7-7c5f04c57a75",
      "id": "01077eae-44b3-4e17-a129-6d39901d3730",
      "name": "Rodriguez Inc"
    },
    {
      "id": "11f93076-064d-43a0-8d5e-7c28f8eae3a4",
      "name": "Botsford - Schmeler",
      "active": false,
      "level": 5,
      "organizationalUnitId": "af3d4b34-0351-4aec-9727-adcb7984f929"
    },
    {
      "organizationalUnitId": "c70185b2-3540-46c3-8a18-6ecd2d6e07f3",
      "id": "301509cb-bfe4-4a09-891e-1b121eadb593",
      "name": "Nolan - Maggio",
      "active": false,
      "level": 7
    },
    {
      "id": "a7c43023-73ad-4504-8df1-a7ec0c19c4c6",
      "name": "Bailey LLC",
      "active": false,
      "level": 1,
      "organizationalUnitId": "beb3024c-0a11-49e2-b305-4d3784d4d69c"
    },
    {
      "id": "ae2bed2a-b5b1-4c39-a27b-ffeb6cd6e8e8",
      "name": "Greenholt - Deckow",
      "active": false,
      "level": 1,
      "organizationalUnitId": "504f4777-f5a7-4ef2-a275-df174040b706"
    },
    {
      "name": "Crooks - Hoeger",
      "active": false,
      "level": 0,
      "organizationalUnitId": "f136ad1b-4969-4e4d-8456-bd18553728a2",
      "id": "95dcdade-06ef-4195-9982-299d39184e74"
    },
    {
      "organizationalUnitId": "a1096ba6-9186-4bf2-bbea-7f41a8120de7",
      "id": "4d07ac48-8f8e-4d66-8717-765f3b811ce3",
      "name": "Bartell, Hirthe and Walsh",
      "active": false,
      "level": 3
    },
    {
      "level": 0,
      "organizationalUnitId": "b140eedf-b38e-4954-ab9b-0f352a1fd9e3",
      "id": "8ff1b197-1cfd-4790-9946-5b295c4a910c",
      "name": "Gerlach, Pfeffer and Bosco",
      "active": false
    },
    {
      "id": "cd6c4978-8649-45c8-a049-6ab34a84cb4c",
      "name": "Ritchie Inc",
      "active": true,
      "level": 5,
      "organizationalUnitId": "d6005a5e-c34a-48a7-8fd1-f8bbdfe61214"
    },
    {
      "name": "Lemke - Hermiston",
      "active": true,
      "level": 2,
      "organizationalUnitId": "6e28dc40-4932-44de-bad6-d5b809106b96",
      "id": "93525f6c-d32a-4ac1-9857-a7839efeeff9"
    },
    {
      "id": "e2345288-eecd-4908-b800-893f057a1d0a",
      "name": "Metz - Morar",
      "active": true,
      "level": 0,
      "organizationalUnitId": "322dac0d-f422-431f-a162-206131a1757b"
    },
    {
      "id": "7e2d4b57-6f7d-4399-881c-9a6bbe7e8e7f",
      "name": "Feil, Thiel and Gutmann",
      "active": true,
      "level": 2,
      "organizationalUnitId": "1bd7e3b5-2c6a-42a4-91c3-2838d52c3d8e"
    },
    {
      "id": "eb0dd17e-65e4-4c51-bb5e-5320df623985",
      "name": "Nikolaus Group",
      "active": false,
      "level": 0,
      "organizationalUnitId": "5fb1593e-5ee7-4b88-b567-4d93c161684a"
    },
    {
      "id": "ab4dd765-692d-40a3-846c-90f2cbfcbde1",
      "name": "Toy, Schaden and Ryan",
      "active": true,
      "level": 8,
      "organizationalUnitId": "c3c02dde-b268-4b11-99b8-f7d74821e053"
    },
    {
      "id": "d29e0add-e614-4d26-971e-d4166b15c63d",
      "name": "Tremblay - Schuppe",
      "active": true,
      "level": 6,
      "organizationalUnitId": "a8994a96-da6d-4853-8bd6-8f75d585c7a4"
    },
    {
      "level": 5,
      "organizationalUnitId": "dd1923fa-fdc0-41cc-a783-2b01bd70e7cb",
      "id": "c23179ef-8071-4b2b-9040-248ef9a287fe",
      "name": "McCullough - Bradtke",
      "active": true
    },
    {
      "level": 8,
      "organizationalUnitId": "be2dd224-f907-4997-acad-301b9d7b4066",
      "id": "64c60348-8433-4c95-938e-2e9fdba6bb67",
      "name": "Rowe, Wolff and Lesch",
      "active": true
    },
    {
      "id": "bd38af8d-dd33-45ea-a5e2-91f48ac4e25f",
      "name": "Blanda LLC",
      "active": true,
      "level": 9,
      "organizationalUnitId": "d204747a-ba27-48d3-bc9d-c8795bec906d"
    },
    {
      "id": "5776aa70-0a55-4a30-a592-e592b84a7b53",
      "name": "Kiehn, Dooley and Hayes",
      "active": false,
      "level": 7,
      "organizationalUnitId": "db02e411-f6cb-44d7-80ce-884c6760e135"
    },
    {
      "id": "3a138e9e-ca02-4ea3-beb4-91b6a022a2b0",
      "name": "Donnelly Group",
      "active": true,
      "level": 7,
      "organizationalUnitId": "db818448-ee00-4b74-b75e-3f0cc065e307"
    },
    {
      "active": false,
      "level": 4,
      "organizationalUnitId": "a432f6f9-3e8a-4475-a564-ccb10ee2f8a2",
      "id": "e9d522bf-9f0a-49f4-9e9d-1c54b27e4744",
      "name": "Hills - Blick"
    },
    {
      "id": "d19b2ddb-9e45-4272-a45f-77eac6e07d50",
      "name": "Heaney, Treutel and Donnelly",
      "active": true,
      "level": 7,
      "organizationalUnitId": "77c93bc4-eb54-4eb5-81f0-89c23889483b"
    },
    {
      "level": 1,
      "organizationalUnitId": "61816320-2621-4197-ad20-42e870cef633",
      "id": "34a20a19-f7b4-4014-8d65-21cdbd93cad7",
      "name": "Keeling - Weber",
      "active": false
    },
    {
      "id": "781c382b-a791-4e76-8981-b04b313a4486",
      "name": "Powlowski Group",
      "active": true,
      "level": 8,
      "organizationalUnitId": "878eddac-f2ad-452d-b07a-7101c885d3d6"
    },
    {
      "id": "6c64763a-2457-4687-a507-2815d6eb400d",
      "name": "Gerhold LLC",
      "active": true,
      "level": 6,
      "organizationalUnitId": "a1901139-c4b8-4dfe-9e36-40e4334576e1"
    },
    {
      "active": true,
      "level": 3,
      "organizationalUnitId": "cc3f10be-6dcf-4524-bc71-0f4b6ae0d2f9",
      "id": "5a69bbd4-00dd-42ae-a829-8410a1ac8523",
      "name": "Kulas - Jerde"
    },
    {
      "organizationalUnitId": "47d23486-9d65-44cc-80fe-703238dbef49",
      "id": "45bffa3e-cd6f-4556-b93b-c993e5d338b1",
      "name": "Leffler, Kunde and McDermott",
      "active": true,
      "level": 3
    },
    {
      "id": "e7bab572-bab0-4075-bdc1-a0ef23e80321",
      "name": "Marvin, Nader and Welch",
      "active": false,
      "level": 2,
      "organizationalUnitId": "01a28759-58ef-42cb-8d21-1a062f00e1ce"
    },
    {
      "id": "3246f32e-ecab-474f-a6f4-793a9d26fd25",
      "name": "Cole - Rolfson",
      "active": true,
      "level": 9,
      "organizationalUnitId": "44c81a45-53aa-4d8b-958e-24e93b5228e4"
    },
    {
      "active": true,
      "level": 4,
      "organizationalUnitId": "93cf8973-d915-4106-a45a-611072ada877",
      "id": "b0c800f0-e02b-4fc4-9f3b-b5d1ea892521",
      "name": "Dare - Gislason"
    },
    {
      "id": "0a697b80-add7-4bfd-8269-9dbae6ff14a2",
      "name": "Christiansen - Kunze",
      "active": false,
      "level": 9,
      "organizationalUnitId": "d6005a5e-c34a-48a7-8fd1-f8bbdfe61214"
    },
    {
      "name": "Bartell, Schmeler and Kuphal",
      "active": true,
      "level": 9,
      "organizationalUnitId": "a1096ba6-9186-4bf2-bbea-7f41a8120de7",
      "id": "63c70654-1a88-4542-96c3-3d7c8fefa8df"
    },
    {
      "level": 8,
      "organizationalUnitId": "7785ade0-707c-4fc3-9e5c-f4c3f2518799",
      "id": "bd8dfba7-08c4-4ecc-98d3-299e44e5fbbb",
      "name": "Herzog and Sons",
      "active": true
    },
    {
      "id": "9bf4219d-84c1-4f43-b1bd-dc3c42f473b1",
      "name": "Bogisich and Sons",
      "active": false,
      "level": 3,
      "organizationalUnitId": "bf1d1c69-d674-4d16-a881-ace7432b7c42"
    },
    {
      "level": 9,
      "organizationalUnitId": "af3d4b34-0351-4aec-9727-adcb7984f929",
      "id": "71f5d9be-3011-4bcd-9c83-3b7326184e38",
      "name": "Bogan LLC",
      "active": true
    },
    {
      "id": "11e73a78-e274-436d-8812-01a523a8516d",
      "name": "Johns - Gutmann",
      "active": true,
      "level": 8,
      "organizationalUnitId": "1cec44eb-5c9d-4869-8474-dadd541792cf"
    },
    {
      "level": 9,
      "organizationalUnitId": "beb3024c-0a11-49e2-b305-4d3784d4d69c",
      "id": "ea05ccfe-9163-4d0a-acda-eadb3f0dd560",
      "name": "Hodkiewicz, Jakubowski and Heller",
      "active": true
    },
    {
      "id": "10f7586b-adc5-4306-a34b-8678324024ca",
      "name": "Johnston, McClure and Keeling",
      "active": false,
      "level": 7,
      "organizationalUnitId": "1bd7e3b5-2c6a-42a4-91c3-2838d52c3d8e"
    },
    {
      "active": false,
      "level": 6,
      "organizationalUnitId": "8c606df1-7251-4389-be58-244ef1b1066e",
      "id": "8a2934fa-f051-460e-8f8f-08f0ff21e05d",
      "name": "Jones, O'Keefe and Daniel"
    },
    {
      "name": "Glover, Skiles and Kilback",
      "active": true,
      "level": 8,
      "organizationalUnitId": "7575e624-8c15-4aee-aaf3-65110e179c26",
      "id": "be6386ec-a14e-4f2f-a220-ffac99441f17"
    },
    {
      "id": "b0e1610a-4d05-428d-b30d-24c42feeb7f0",
      "name": "Hoppe and Sons",
      "active": true,
      "level": 9,
      "organizationalUnitId": "c70185b2-3540-46c3-8a18-6ecd2d6e07f3"
    },
    {
      "level": 6,
      "organizationalUnitId": "006cbef9-6170-42d5-90ef-f061db2d9ee7",
      "id": "53ec9095-8058-4a19-bf04-1081d6c24b15",
      "name": "Klein Group",
      "active": true
    },
    {
      "id": "96861f3c-3f6d-4412-8e61-ba4661776dc4",
      "name": "Johnston Group",
      "active": false,
      "level": 4,
      "organizationalUnitId": "723c46d4-1445-4e3a-9b22-b59cf1872ae8"
    },
    {
      "id": "f7987fa8-6c10-4f2d-af8d-e4df79fa2190",
      "name": "Thompson - Schultz",
      "active": true,
      "level": 0,
      "organizationalUnitId": "24b2e2b4-e0cc-4f94-be69-c43a4add5af4"
    },
    {
      "active": false,
      "level": 2,
      "organizationalUnitId": "e55c032d-36b0-4a5a-aea6-ffef2aa5065c",
      "id": "d8403f89-10df-4cdb-8299-a5c0024a13c9",
      "name": "Kris - Russel"
    },
    {
      "id": "7c4f9961-56bb-4d9f-a914-a7a01a204e66",
      "name": "Walter LLC",
      "active": false,
      "level": 6,
      "organizationalUnitId": "ce603e30-fffd-46ec-ab5a-e9d438b77953"
    },
    {
      "id": "b6228364-84a8-4081-ab3f-0b4970449135",
      "name": "Parker - Little",
      "active": false,
      "level": 0,
      "organizationalUnitId": "f4aa33e4-edb5-4cee-8965-a75b6e9263e0"
    },
    {
      "active": true,
      "level": 6,
      "organizationalUnitId": "be2dd224-f907-4997-acad-301b9d7b4066",
      "id": "0271a941-ae5b-48fd-ab66-6a23c8ea18bc",
      "name": "Kessler - Gutkowski"
    },
    {
      "active": true,
      "level": 3,
      "organizationalUnitId": "61816320-2621-4197-ad20-42e870cef633",
      "id": "e6b5f071-fba5-4924-a8de-1858e1305e4e",
      "name": "Witting and Sons"
    }
  ],
  "seasons": [
    {
      "period": "1977",
      "active": true,
      "leagueId": "ff911798-9176-4818-8eed-2dd7660c0826",
      "id": "167440e2-8332-4bf6-9be2-15ac0e2cf72f",
      "name": "Bartell Inc"
    },
    {
      "id": "0af256e7-8019-4ba9-90a3-22525a91d115",
      "name": "White - Sanford",
      "period": "1992",
      "active": false,
      "leagueId": "aed6c52b-31d4-4701-b2ac-0c0605f5efd9"
    },
    {
      "name": "Becker - Bogan",
      "period": "1989",
      "active": false,
      "leagueId": "d263f688-5721-46c9-8da9-3ea069c72198",
      "id": "c811e3a1-2617-4bd7-ae3e-a0d04923e1ed"
    },
    {
      "leagueId": "865dc3a6-8095-414c-8534-49a0522fc22d",
      "id": "854c3752-e7d4-4b4e-9f3a-b214f5a1ce1c",
      "name": "Beier, Hodkiewicz and Bartell",
      "period": "1993",
      "active": true
    },
    {
      "name": "Sauer Inc",
      "period": "2010",
      "active": true,
      "leagueId": "4b188c35-801b-4537-8644-c7fd1069230f",
      "id": "abe39e7e-55aa-4730-8408-8c0a8309aa8d"
    },
    {
      "id": "f4a84914-6e87-4948-b446-0745401c02e6",
      "name": "Corkery and Sons",
      "period": "2016",
      "active": true,
      "leagueId": "69d50685-8d5e-45a9-af23-5369591a9826"
    },
    {
      "name": "Ondricka - Carter",
      "period": "2015",
      "active": true,
      "leagueId": "57a929c0-0971-462c-9027-478f64a58a59",
      "id": "01dfeeef-0cf4-4c18-8618-03786e259e7e"
    },
    {
      "leagueId": "a731dab6-7486-4aaa-81d8-38a636abc11a",
      "id": "7c374673-46aa-4160-a96c-7e7639510430",
      "name": "Lubowitz - Hills",
      "period": "2005",
      "active": true
    },
    {
      "id": "63837a95-1fe0-4560-914c-73540c83cef3",
      "name": "Kiehn, Corwin and Spencer",
      "period": "2016",
      "active": false,
      "leagueId": "c76323ed-7502-4f6b-a7ba-e9d0c550a3e6"
    },
    {
      "active": false,
      "leagueId": "10d825f5-f4be-44b1-8b3e-ad087a44a109",
      "id": "68424211-e01a-4079-996c-006088aab6fd",
      "name": "Dach - Schoen",
      "period": "1982"
    },
    {
      "leagueId": "4356792c-b081-4dc2-940c-b2ca7652b3d7",
      "id": "ba52d8c6-dc28-4e95-b79f-c691592e3341",
      "name": "Gorczany Group",
      "period": "2013",
      "active": false
    },
    {
      "name": "Lindgren - Bogan",
      "period": "1988",
      "active": false,
      "leagueId": "a946061a-d974-40d2-8f40-31713cd7c678",
      "id": "948e3699-2a65-4a92-a14e-a48df58d2f51"
    },
    {
      "id": "34cc474c-2cf3-4706-9f62-e07eb851febe",
      "name": "Moore, Walsh and Stamm",
      "period": "2012",
      "active": false,
      "leagueId": "9b5a91d3-c5f6-484b-8230-d004ec527ed7"
    },
    {
      "id": "211e51c8-23e0-41bf-9d74-059f9b719cc1",
      "name": "Conroy and Sons",
      "period": "2023",
      "active": false,
      "leagueId": "7f73985a-8793-4c2a-8d27-c245e32f37ce"
    },
    {
      "id": "7d273054-43c5-46cc-a81a-fb9358f537ed",
      "name": "Dickinson - Corkery",
      "period": "1977",
      "active": true,
      "leagueId": "be6f3f39-35b3-4634-9576-70e903778dd8"
    },
    {
      "period": "1981",
      "active": false,
      "leagueId": "7a4959bb-b815-494f-b642-4c21ce4a438b",
      "id": "5721ed51-d25e-400e-b845-0fef26ca60c1",
      "name": "VonRueden - Moen"
    },
    {
      "name": "Ryan Group",
      "period": "1997",
      "active": false,
      "leagueId": "4f5aeae5-4d30-40ad-8449-64e7eb5128c0",
      "id": "1b7b3788-f812-4d71-bafa-67e37ab354da"
    },
    {
      "id": "b8d4de60-f8e5-42a5-91c9-5f8fe7812583",
      "name": "Boyer, Prosacco and Crooks",
      "period": "1998",
      "active": true,
      "leagueId": "ef86383e-b7ee-413e-b89e-f5e72c92b017"
    },
    {
      "id": "3793bfbe-6c9c-4f56-81a7-e98387145efb",
      "name": "Boyle - White",
      "period": "2001",
      "active": true,
      "leagueId": "20b749c7-b765-4a1a-b0d6-92dfd84a92fc"
    },
    {
      "period": "1999",
      "active": true,
      "leagueId": "f72508ec-f151-48f1-924b-ac2497f5359f",
      "id": "194a8575-1c1c-46cf-9c61-c36199e54e16",
      "name": "Waelchi Inc"
    },
    {
      "id": "b8ab79b7-8ec0-4254-b851-0c7b35cf95c0",
      "name": "MacGyver, Bahringer and Bailey",
      "period": "2020",
      "active": false,
      "leagueId": "3835c78e-8f96-4710-927a-b19ea3711ad3"
    },
    {
      "id": "d3cf8fc5-9a73-40dc-b568-e71699453a2e",
      "name": "Batz - Barrows",
      "period": "1989",
      "active": false,
      "leagueId": "3218d06a-6cac-4bee-bad7-5f3b3b13d782"
    },
    {
      "active": true,
      "leagueId": "11f93076-064d-43a0-8d5e-7c28f8eae3a4",
      "id": "3526aad4-f9b8-4b03-a3d6-715c33e4bf46",
      "name": "Hagenes, Swaniawski and Waelchi",
      "period": "2016"
    },
    {
      "leagueId": "3b033579-c138-45c6-ab43-78df312b140b",
      "id": "244f1638-d21e-4c39-9314-8f72e95ada6d",
      "name": "Trantow, Oberbrunner and Maggio",
      "period": "1985",
      "active": false
    },
    {
      "name": "Rempel and Sons",
      "period": "1991",
      "active": true,
      "leagueId": "01077eae-44b3-4e17-a129-6d39901d3730",
      "id": "6555e391-bc9b-4453-9dfa-b06503cf61f9"
    },
    {
      "id": "5773700c-9f90-4940-9e94-7db1278d9f49",
      "name": "Gutmann - Harvey",
      "period": "1982",
      "active": false,
      "leagueId": "301509cb-bfe4-4a09-891e-1b121eadb593"
    },
    {
      "id": "65e62a1f-821a-4740-9794-4fed83731468",
      "name": "Schiller LLC",
      "period": "2018",
      "active": false,
      "leagueId": "57a929c0-0971-462c-9027-478f64a58a59"
    },
    {
      "period": "2011",
      "active": false,
      "leagueId": "ae2bed2a-b5b1-4c39-a27b-ffeb6cd6e8e8",
      "id": "3256a60d-c9d2-4e1b-8f3a-528d3df7532b",
      "name": "Nader and Sons"
    },
    {
      "name": "Homenick - Dietrich",
      "period": "1990",
      "active": false,
      "leagueId": "4d07ac48-8f8e-4d66-8717-765f3b811ce3",
      "id": "2a24d559-69b6-489c-8672-fd6ffb139ae0"
    },
    {
      "id": "40f0f7fb-b5ae-435f-82b3-a5f3097ae576",
      "name": "Ondricka LLC",
      "period": "2015",
      "active": false,
      "leagueId": "a7c43023-73ad-4504-8df1-a7ec0c19c4c6"
    },
    {
      "id": "87a9ea2d-fc01-4e7c-84e3-0cdc8c10fb74",
      "name": "Kuvalis, Wiegand and Daniel",
      "period": "1990",
      "active": false,
      "leagueId": "a731dab6-7486-4aaa-81d8-38a636abc11a"
    },
    {
      "id": "ed09aac8-f8a2-41a9-810e-1a3a698dc1f1",
      "name": "Dietrich Group",
      "period": "1982",
      "active": false,
      "leagueId": "93525f6c-d32a-4ac1-9857-a7839efeeff9"
    },
    {
      "id": "d78b1a8e-4c3c-4a76-a09c-5ac2c9b94bdd",
      "name": "Powlowski, Greenholt and Haag",
      "period": "2013",
      "active": true,
      "leagueId": "ff911798-9176-4818-8eed-2dd7660c0826"
    },
    {
      "period": "1976",
      "active": true,
      "leagueId": "7e2d4b57-6f7d-4399-881c-9a6bbe7e8e7f",
      "id": "d520e3f2-9bb5-4fdc-bff8-30729f3ebf2c",
      "name": "Lowe, Walter and Gorczany"
    },
    {
      "period": "2010",
      "active": true,
      "leagueId": "eb0dd17e-65e4-4c51-bb5e-5320df623985",
      "id": "382ec211-d92f-450d-b697-b49f28f95c08",
      "name": "Armstrong, Harris and Towne"
    },
    {
      "name": "Kris and Sons",
      "period": "2017",
      "active": true,
      "leagueId": "ab4dd765-692d-40a3-846c-90f2cbfcbde1",
      "id": "8c4d9f85-2dd1-4b57-8170-47116f293a05"
    },
    {
      "active": true,
      "leagueId": "f72508ec-f151-48f1-924b-ac2497f5359f",
      "id": "ff68ea2c-0639-4eff-bcbf-6e9845d6c016",
      "name": "Jaskolski LLC",
      "period": "1987"
    },
    {
      "id": "41ebdaa3-3bc9-42b8-80b5-fb848bf15935",
      "name": "Boyer Group",
      "period": "1979",
      "active": true,
      "leagueId": "4b188c35-801b-4537-8644-c7fd1069230f"
    },
    {
      "id": "5d7951dd-72eb-40f4-b6a7-761c9da30cfc",
      "name": "Jenkins LLC",
      "period": "2006",
      "active": true,
      "leagueId": "69d50685-8d5e-45a9-af23-5369591a9826"
    },
    {
      "id": "8f8b1574-20a1-4227-8e86-2f4a5a385ed3",
      "name": "Douglas, Denesik and Schinner",
      "period": "2024",
      "active": false,
      "leagueId": "bd38af8d-dd33-45ea-a5e2-91f48ac4e25f"
    },
    {
      "active": true,
      "leagueId": "5776aa70-0a55-4a30-a592-e592b84a7b53",
      "id": "9e47376c-9149-42eb-b846-91fe29b68e91",
      "name": "Douglas - Schroeder",
      "period": "1997"
    },
    {
      "name": "Schiller, Crona and Tillman",
      "period": "2023",
      "active": true,
      "leagueId": "95dcdade-06ef-4195-9982-299d39184e74",
      "id": "508297b9-3c7b-483d-9011-fdd40d7cdefe"
    },
    {
      "active": false,
      "leagueId": "a946061a-d974-40d2-8f40-31713cd7c678",
      "id": "a88a1fec-edb7-429f-836f-853db9674636",
      "name": "Maggio, Welch and Schuster",
      "period": "1994"
    },
    {
      "id": "9247fa5f-acdc-4d5c-9a88-3766818949ea",
      "name": "Rutherford - Wolff",
      "period": "1990",
      "active": true,
      "leagueId": "8ff1b197-1cfd-4790-9946-5b295c4a910c"
    },
    {
      "leagueId": "3b033579-c138-45c6-ab43-78df312b140b",
      "id": "99a3b82e-598c-47aa-b58b-a2d4e0d06179",
      "name": "Metz - Gerlach",
      "period": "2012",
      "active": false
    },
    {
      "id": "b006e55b-26cd-4c85-a035-50507dabe9d7",
      "name": "Waelchi Group",
      "period": "1985",
      "active": true,
      "leagueId": "6c64763a-2457-4687-a507-2815d6eb400d"
    },
    {
      "id": "d47bf703-eae6-4984-8aab-21dfadc8f568",
      "name": "Veum - Rolfson",
      "period": "2024",
      "active": false,
      "leagueId": "781c382b-a791-4e76-8981-b04b313a4486"
    },
    {
      "id": "c557192c-7d1f-4eca-8b23-0ac2babf321b",
      "name": "Ritchie Group",
      "period": "2016",
      "active": true,
      "leagueId": "9b5a91d3-c5f6-484b-8230-d004ec527ed7"
    },
    {
      "active": false,
      "leagueId": "01077eae-44b3-4e17-a129-6d39901d3730",
      "id": "10037589-a557-41b9-a534-365a637995e5",
      "name": "Hudson, O'Hara and Feil",
      "period": "1996"
    },
    {
      "name": "Stokes, Wunsch and Halvorson",
      "period": "2022",
      "active": false,
      "leagueId": "be6f3f39-35b3-4634-9576-70e903778dd8",
      "id": "3edb2dd6-fdb3-40f8-a520-97595bd1c046"
    },
    {
      "id": "9720254e-e81c-4d45-8d0e-db0daadf6eef",
      "name": "Williamson - Rippin",
      "period": "1975",
      "active": false,
      "leagueId": "e7bab572-bab0-4075-bdc1-a0ef23e80321"
    },
    {
      "id": "e59aa423-c72f-474c-9c74-529f87c8ee43",
      "name": "Kutch - Schaefer",
      "period": "1995",
      "active": false,
      "leagueId": "b0c800f0-e02b-4fc4-9f3b-b5d1ea892521"
    },
    {
      "name": "Quitzon - Waters",
      "period": "1985",
      "active": true,
      "leagueId": "3246f32e-ecab-474f-a6f4-793a9d26fd25",
      "id": "6377f60d-6eaf-4413-9b51-a720c1812561"
    },
    {
      "id": "86798899-1f49-483a-82c0-2bad509274e8",
      "name": "Johnston and Sons",
      "period": "1991",
      "active": true,
      "leagueId": "20b749c7-b765-4a1a-b0d6-92dfd84a92fc"
    },
    {
      "id": "40f81a14-5427-449a-b189-a5cdde0e1be3",
      "name": "Schulist Group",
      "period": "2005",
      "active": false,
      "leagueId": "0a697b80-add7-4bfd-8269-9dbae6ff14a2"
    },
    {
      "id": "26239164-be9b-413d-bef8-77827fd5df22",
      "name": "Lesch - Goyette",
      "period": "1994",
      "active": true,
      "leagueId": "63c70654-1a88-4542-96c3-3d7c8fefa8df"
    },
    {
      "name": "Larson, Howe and Schowalter",
      "period": "1997",
      "active": false,
      "leagueId": "3218d06a-6cac-4bee-bad7-5f3b3b13d782",
      "id": "6bae1188-dd93-40ec-9392-9c8aa7e86214"
    },
    {
      "leagueId": "9bf4219d-84c1-4f43-b1bd-dc3c42f473b1",
      "id": "ceb891fd-f7d4-468a-b1ff-d259c75cca20",
      "name": "Kautzer - Rau",
      "period": "1987",
      "active": false
    },
    {
      "id": "3fc4e248-ad73-4a57-9070-277c4f6c9c3d",
      "name": "Buckridge Group",
      "period": "1983",
      "active": true,
      "leagueId": "ff911798-9176-4818-8eed-2dd7660c0826"
    },
    {
      "id": "8f8769b5-714b-48bd-8e4b-bafa794cd2fc",
      "name": "Schmidt, Legros and Schumm",
      "period": "2021",
      "active": false,
      "leagueId": "71f5d9be-3011-4bcd-9c83-3b7326184e38"
    },
    {
      "id": "567d667c-07cd-420c-8b8a-e9362bc5436d",
      "name": "Hansen, Franecki and Gerhold",
      "period": "1980",
      "active": true,
      "leagueId": "a7c43023-73ad-4504-8df1-a7ec0c19c4c6"
    },
    {
      "period": "1996",
      "active": false,
      "leagueId": "3835c78e-8f96-4710-927a-b19ea3711ad3",
      "id": "5fae6383-1e13-495c-a55a-d232f2e1c42d",
      "name": "Herzog LLC"
    },
    {
      "name": "Rogahn, Tromp and Greenfelder",
      "period": "2003",
      "active": false,
      "leagueId": "10f7586b-adc5-4306-a34b-8678324024ca",
      "id": "1d4e858a-48b5-4897-9b85-95a48f61ae59"
    },
    {
      "period": "1996",
      "active": true,
      "leagueId": "93525f6c-d32a-4ac1-9857-a7839efeeff9",
      "id": "7364355d-f9f0-4e9f-9b1f-221b3bc1f879",
      "name": "Osinski, Crooks and Stoltenberg"
    },
    {
      "id": "40d06100-6094-4fe8-bf2c-3a28118f5e7c",
      "name": "McCullough, Pollich and Goodwin",
      "period": "1999",
      "active": true,
      "leagueId": "5776aa70-0a55-4a30-a592-e592b84a7b53"
    },
    {
      "id": "9c921e99-8a5f-4ca6-8773-27eea332c3b5",
      "name": "Monahan - Bogisich",
      "period": "1977",
      "active": true,
      "leagueId": "b0e1610a-4d05-428d-b30d-24c42feeb7f0"
    },
    {
      "id": "5f85cdcc-87a9-450c-b6a5-deb6fd74449c",
      "name": "Skiles Inc",
      "period": "2012",
      "active": false,
      "leagueId": "ab4dd765-692d-40a3-846c-90f2cbfcbde1"
    },
    {
      "period": "1979",
      "active": true,
      "leagueId": "eb0dd17e-65e4-4c51-bb5e-5320df623985",
      "id": "ea009f25-4fd4-4265-8481-9e4edeea3451",
      "name": "Skiles and Sons"
    },
    {
      "period": "2021",
      "active": true,
      "leagueId": "4b188c35-801b-4537-8644-c7fd1069230f",
      "id": "ad35d0e7-ac29-4069-9b36-70daee4260c3",
      "name": "Nikolaus - Roob"
    },
    {
      "id": "746d54c5-04b4-4eba-97a1-55ddff1bef62",
      "name": "Steuber and Sons",
      "period": "2016",
      "active": false,
      "leagueId": "7c4f9961-56bb-4d9f-a914-a7a01a204e66"
    },
    {
      "id": "12c139d5-4282-4efd-afd4-c931979b35b6",
      "name": "Nikolaus, Prosacco and Tremblay",
      "period": "1996",
      "active": true,
      "leagueId": "69d50685-8d5e-45a9-af23-5369591a9826"
    },
    {
      "id": "d8f97b7e-4eab-41e0-a4fe-77654745bf46",
      "name": "Koepp Inc",
      "period": "1992",
      "active": false,
      "leagueId": "95dcdade-06ef-4195-9982-299d39184e74"
    },
    {
      "active": false,
      "leagueId": "3b033579-c138-45c6-ab43-78df312b140b",
      "id": "c3f70b3b-637d-46d6-9a30-bc93899c5392",
      "name": "Sanford LLC",
      "period": "2012"
    }
  ],
  "seasonTeams": [
    {
      "id": "7bbd4fd4-18bc-43a5-a882-c1fa2dcf7606",
      "name": "Douglas, Franecki and Boyer",
      "teamId": "c873f866-3323-4d8f-a685-fb968cdf136b",
      "seasonId": "167440e2-8332-4bf6-9be2-15ac0e2cf72f"
    },
    {
      "id": "578d6416-1b4d-438e-a259-168707ff446a",
      "name": "Doyle and Sons",
      "teamId": "d39ddeca-9adb-40e5-8764-5307d9ab00d3",
      "seasonId": "0af256e7-8019-4ba9-90a3-22525a91d115"
    },
    {
      "id": "a9b8aebc-869e-4dc4-97ff-6a39f7c16118",
      "name": "Reilly Group",
      "teamId": "fce040ab-4d22-42f3-a05e-fb81a2c0cbb6",
      "seasonId": "c811e3a1-2617-4bd7-ae3e-a0d04923e1ed"
    },
    {
      "id": "0559328e-5fe3-46dd-bc41-86835708e0e3",
      "name": "Hermann - Prosacco",
      "teamId": "b5fae036-4aac-4dd7-94b2-4e7c31aa5968",
      "seasonId": "abe39e7e-55aa-4730-8408-8c0a8309aa8d"
    },
    {
      "id": "a1a2cf61-d27e-40ed-af9f-ac1baf0e6d7a",
      "name": "O'Conner, Feil and Renner",
      "teamId": "b3cb4b1f-2302-4769-8f45-c2e7b8f0ab86",
      "seasonId": "854c3752-e7d4-4b4e-9f3a-b214f5a1ce1c"
    },
    {
      "name": "Wiegand LLC",
      "teamId": "4d5922b3-f08f-498a-9dfd-cc98ad5f6b48",
      "seasonId": "f4a84914-6e87-4948-b446-0745401c02e6",
      "id": "00f118f7-3cf1-41ad-b4b9-195c53dc9f87"
    },
    {
      "id": "ff42a2dc-28b7-4942-968a-9e881482f087",
      "name": "VonRueden Group",
      "teamId": "cd076f11-6d0c-4bf3-b895-32705811f5f4",
      "seasonId": "7c374673-46aa-4160-a96c-7e7639510430"
    },
    {
      "teamId": "d5934946-f165-4c15-910a-402df60d1000",
      "seasonId": "63837a95-1fe0-4560-914c-73540c83cef3",
      "id": "f68714e5-f689-40c9-8b57-a762be3b8685",
      "name": "Blanda, Barton and Sporer"
    },
    {
      "id": "90285977-2eb7-48f2-a947-870e4fa6b6ea",
      "name": "Konopelski and Sons",
      "teamId": "4cb435c2-85ed-43fe-8cf9-0e2c642d075c",
      "seasonId": "68424211-e01a-4079-996c-006088aab6fd"
    },
    {
      "seasonId": "948e3699-2a65-4a92-a14e-a48df58d2f51",
      "id": "835695cf-86a3-4666-8c10-4cdfa4bc53a6",
      "name": "Jones - Gottlieb",
      "teamId": "9fa32105-bc71-4ef2-bae4-05cd1232550a"
    },
    {
      "id": "6e6786d3-a858-42dc-b48e-12797e8a900d",
      "name": "Prosacco, Mann and Hettinger",
      "teamId": "63238ad4-9c5b-4c7b-aa94-095aa8f6661f",
      "seasonId": "34cc474c-2cf3-4706-9f62-e07eb851febe"
    },
    {
      "id": "30c97299-ed31-4686-a6b6-f8baefb4773c",
      "name": "Blanda, Harvey and Fritsch",
      "teamId": "db81e4bf-ba3b-468f-b4ad-a891767b2a75",
      "seasonId": "211e51c8-23e0-41bf-9d74-059f9b719cc1"
    },
    {
      "id": "1ed19cad-e182-43c3-937e-5a2024cbd5e2",
      "name": "Satterfield Inc",
      "teamId": "3857ee45-fc91-4c8b-8d8d-d0bcb952a4d9",
      "seasonId": "7d273054-43c5-46cc-a81a-fb9358f537ed"
    },
    {
      "id": "391b85b2-4c59-43c4-b3cf-9ba303006475",
      "name": "Hartmann and Sons",
      "teamId": "37b0a396-a3f0-47e2-a796-bb2d6df0c914",
      "seasonId": "5721ed51-d25e-400e-b845-0fef26ca60c1"
    },
    {
      "id": "9f085048-b876-4e65-b1ec-67f1c1b42965",
      "name": "Crist, Stracke and Heaney",
      "teamId": "2ad6c9a4-e9f4-4ed0-bcaa-87fb8afa03ac",
      "seasonId": "1b7b3788-f812-4d71-bafa-67e37ab354da"
    },
    {
      "id": "b2b35f41-eb65-467e-8a0f-c43449efaf59",
      "name": "Batz - Nader",
      "teamId": "152ccdea-7ec1-4007-9045-447d475b0a48",
      "seasonId": "b8d4de60-f8e5-42a5-91c9-5f8fe7812583"
    },
    {
      "seasonId": "3793bfbe-6c9c-4f56-81a7-e98387145efb",
      "id": "106213e7-e747-4927-815c-fcc7ec4bfdcf",
      "name": "Ward - Armstrong",
      "teamId": "659f63af-e6f9-49c6-9b74-21ca8e34fb63"
    },
    {
      "id": "90fee157-5392-4e18-898e-cf37a7952b40",
      "name": "Abbott - Gusikowski",
      "teamId": "3ccfdc86-65cc-423e-b31e-d52cdc3a2f64",
      "seasonId": "b8ab79b7-8ec0-4254-b851-0c7b35cf95c0"
    },
    {
      "id": "34891f2e-fd79-4346-bc01-9c8cf813ad23",
      "name": "Paucek, Boyle and Ruecker",
      "teamId": "f31bc63d-7db2-4388-8db8-ff17045ee1ea",
      "seasonId": "d3cf8fc5-9a73-40dc-b568-e71699453a2e"
    },
    {
      "id": "4894b9ac-927d-4d56-87e7-c1e5b4b87894",
      "name": "Dooley - Kemmer",
      "teamId": "aaeee7e2-587e-4350-9e3b-97afeadb747d",
      "seasonId": "3526aad4-f9b8-4b03-a3d6-715c33e4bf46"
    },
    {
      "id": "adedb1c9-bdff-460a-aa54-d340fe567f49",
      "name": "Haag LLC",
      "teamId": "79bb34ab-2e1d-4c2a-b25a-4add12921bbd",
      "seasonId": "244f1638-d21e-4c39-9314-8f72e95ada6d"
    },
    {
      "id": "33f6a5a3-0868-4824-81e8-a7043c782973",
      "name": "Franecki - Kiehn",
      "teamId": "e21d51f2-e4b4-4c35-8cc3-9a8f672df023",
      "seasonId": "6555e391-bc9b-4453-9dfa-b06503cf61f9"
    },
    {
      "id": "62dec217-710c-4649-b04a-69d4c2dd5fb0",
      "name": "Huel LLC",
      "teamId": "049ac8bc-93af-49ac-b020-e981eef0a938",
      "seasonId": "ba52d8c6-dc28-4e95-b79f-c691592e3341"
    },
    {
      "teamId": "cc305665-9a7c-4b5d-b6fb-a4e1475eade4",
      "seasonId": "2a24d559-69b6-489c-8672-fd6ffb139ae0",
      "id": "632e2680-f496-4d3f-ac95-19a447dad2b3",
      "name": "Langosh, Stracke and Huels"
    },
    {
      "seasonId": "5773700c-9f90-4940-9e94-7db1278d9f49",
      "id": "5d9a43e5-6c78-4f3b-aa33-adf5f33b6843",
      "name": "Koelpin, Hettinger and Wolf",
      "teamId": "961ed705-f788-44c4-98f6-096672dc155f"
    },
    {
      "id": "9960455e-e508-4e5c-9727-9901893e40a1",
      "name": "Pacocha and Sons",
      "teamId": "72941fd7-12c0-4bad-a131-258d3b4e4270",
      "seasonId": "40f0f7fb-b5ae-435f-82b3-a5f3097ae576"
    },
    {
      "id": "f5b60ce8-7e14-492b-816d-c86711aeed8d",
      "name": "Lehner LLC",
      "teamId": "a49d8843-9296-4b63-9b44-589900d94771",
      "seasonId": "87a9ea2d-fc01-4e7c-84e3-0cdc8c10fb74"
    },
    {
      "seasonId": "c811e3a1-2617-4bd7-ae3e-a0d04923e1ed",
      "id": "16f78128-73e1-48cd-9d02-e5d9b03279d3",
      "name": "Zemlak, Powlowski and Emmerich",
      "teamId": "d311108b-47fe-406f-a3b8-c2afb1db94d3"
    },
    {
      "id": "9e1acfd2-b743-43f7-a8f6-0ea8e0f94f4e",
      "name": "Dare - Denesik",
      "teamId": "92f7b768-e42f-4b0e-9e22-9c4cab8f5eeb",
      "seasonId": "167440e2-8332-4bf6-9be2-15ac0e2cf72f"
    },
    {
      "id": "171dcddb-0ac5-440c-bcca-2979291c8fe2",
      "name": "McDermott - Grady",
      "teamId": "b8b61c10-27da-4514-8d83-5b9e290a51df",
      "seasonId": "d520e3f2-9bb5-4fdc-bff8-30729f3ebf2c"
    },
    {
      "id": "71fb828d-224e-48de-8d1b-db9261f3b3dc",
      "name": "Green - Maggio",
      "teamId": "b3cb4b1f-2302-4769-8f45-c2e7b8f0ab86",
      "seasonId": "382ec211-d92f-450d-b697-b49f28f95c08"
    },
    {
      "teamId": "d5934946-f165-4c15-910a-402df60d1000",
      "seasonId": "8c4d9f85-2dd1-4b57-8170-47116f293a05",
      "id": "303d552e-8066-4a47-b388-47f1e3657283",
      "name": "Gibson Inc"
    },
    {
      "id": "53f2f735-f190-4df0-a01c-bbff1c8a1d32",
      "name": "Schmidt LLC",
      "teamId": "42942702-88bc-45fc-8e1e-05860c1c18c6",
      "seasonId": "abe39e7e-55aa-4730-8408-8c0a8309aa8d"
    },
    {
      "id": "f24e5678-92e2-4b9b-92c0-bd81e1f5bf1a",
      "name": "Rau, Parker and Kiehn",
      "teamId": "4d5922b3-f08f-498a-9dfd-cc98ad5f6b48",
      "seasonId": "5d7951dd-72eb-40f4-b6a7-761c9da30cfc"
    },
    {
      "teamId": "da0881ec-9c27-495d-9ec7-7c0bd63f81ad",
      "seasonId": "68424211-e01a-4079-996c-006088aab6fd",
      "id": "21576efc-67eb-41c1-aa5e-56276dbb521b",
      "name": "Kutch, Jakubowski and Miller"
    },
    {
      "id": "4906daab-a9d5-443c-9d1d-d40f30480ad9",
      "name": "Hegmann - Ratke",
      "teamId": "1170a70f-277b-4ad6-82ce-7af41aea4ac7",
      "seasonId": "9e47376c-9149-42eb-b846-91fe29b68e91"
    },
    {
      "id": "69306776-c05a-4c47-82c1-028f6c1b5ec4",
      "name": "Cassin - Mann",
      "teamId": "70a62385-c820-4ebd-ae92-dd9d8b937cc6",
      "seasonId": "508297b9-3c7b-483d-9011-fdd40d7cdefe"
    },
    {
      "seasonId": "a88a1fec-edb7-429f-836f-853db9674636",
      "id": "5de22b35-5939-41b6-a75e-31b00b6b6cb3",
      "name": "Cartwright - Kulas",
      "teamId": "9fa32105-bc71-4ef2-bae4-05cd1232550a"
    },
    {
      "teamId": "79bb34ab-2e1d-4c2a-b25a-4add12921bbd",
      "seasonId": "244f1638-d21e-4c39-9314-8f72e95ada6d",
      "id": "12c25b01-d000-4d0b-9d2b-a7f24140f7ed",
      "name": "Hand, Ritchie and Hayes"
    },
    {
      "name": "Davis - Konopelski",
      "teamId": "db81e4bf-ba3b-468f-b4ad-a891767b2a75",
      "seasonId": "b006e55b-26cd-4c85-a035-50507dabe9d7",
      "id": "104621e7-feb4-4c0b-ba40-99ce7f0dabb9"
    },
    {
      "id": "07ae6b3c-9e5c-48d2-a643-1ff57d056143",
      "name": "Langworth, Daugherty and Rau",
      "teamId": "c8979a0d-072b-4765-9d51-e83b446f60fa",
      "seasonId": "65e62a1f-821a-4740-9794-4fed83731468"
    },
    {
      "id": "71e33242-7f9b-4e40-ba6a-fe0737aea446",
      "name": "Armstrong, Rogahn and Sporer",
      "teamId": "e21d51f2-e4b4-4c35-8cc3-9a8f672df023",
      "seasonId": "6555e391-bc9b-4453-9dfa-b06503cf61f9"
    },
    {
      "id": "e2ac97e5-74fd-45ee-9d29-680e6ed15383",
      "name": "Kemmer, Jerde and Conroy",
      "teamId": "274488ef-5d94-41a5-b85a-593ac1a345b8",
      "seasonId": "7d273054-43c5-46cc-a81a-fb9358f537ed"
    },
    {
      "id": "afb8e370-af54-4043-8e50-05f47fab644a",
      "name": "Swaniawski Group",
      "teamId": "47f6a3f8-0f76-44eb-9a35-17221738e780",
      "seasonId": "b8d4de60-f8e5-42a5-91c9-5f8fe7812583"
    },
    {
      "id": "366b060e-af54-4979-beb2-5700d41a2d69",
      "name": "Aufderhar Inc",
      "teamId": "2ad6c9a4-e9f4-4ed0-bcaa-87fb8afa03ac",
      "seasonId": "1b7b3788-f812-4d71-bafa-67e37ab354da"
    },
    {
      "id": "a2333f9c-7226-4bfe-9014-39b5803c22c3",
      "name": "Ondricka Inc",
      "teamId": "37b0a396-a3f0-47e2-a796-bb2d6df0c914",
      "seasonId": "e59aa423-c72f-474c-9c74-529f87c8ee43"
    },
    {
      "id": "25232f33-2372-4ab8-abaf-c1c782bca176",
      "name": "Paucek - Gutkowski",
      "teamId": "f279763a-a080-48cd-b3a7-c0f062917bc5",
      "seasonId": "86798899-1f49-483a-82c0-2bad509274e8"
    },
    {
      "id": "ce3ef6df-8cb7-4367-a20f-72f076caf22a",
      "name": "Murazik - Strosin",
      "teamId": "da5cabe1-b309-487d-9e12-4898acdc4106",
      "seasonId": "2a24d559-69b6-489c-8672-fd6ffb139ae0"
    },
    {
      "id": "1a68480b-b4bd-4b01-b326-a0ef92ca6431",
      "name": "Cronin, Bahringer and Kirlin",
      "teamId": "22889b32-8171-45a7-a67f-8b79244f640e",
      "seasonId": "ba52d8c6-dc28-4e95-b79f-c691592e3341"
    },
    {
      "id": "fe0011ee-8bf4-4b36-8a07-7fc5b8eece3f",
      "name": "Feest, Douglas and Funk",
      "teamId": "c46d8be5-e520-47a2-aa02-defcfafbc789",
      "seasonId": "167440e2-8332-4bf6-9be2-15ac0e2cf72f"
    },
    {
      "id": "3b617e85-75eb-4014-8c9a-cfa49461e96d",
      "name": "Skiles, Kunze and Schmidt",
      "teamId": "4127f32d-0135-4c1a-96f4-0f4745e47f01",
      "seasonId": "ff68ea2c-0639-4eff-bcbf-6e9845d6c016"
    },
    {
      "seasonId": "3526aad4-f9b8-4b03-a3d6-715c33e4bf46",
      "id": "710f7f98-440c-4a2c-8702-3e4631958efc",
      "name": "Gutkowski Group",
      "teamId": "aaeee7e2-587e-4350-9e3b-97afeadb747d"
    },
    {
      "id": "8a475a38-1ed1-4987-abb9-67dca08a4623",
      "name": "Schmitt - Grimes",
      "teamId": "72941fd7-12c0-4bad-a131-258d3b4e4270",
      "seasonId": "40f0f7fb-b5ae-435f-82b3-a5f3097ae576"
    },
    {
      "teamId": "d39ddeca-9adb-40e5-8764-5307d9ab00d3",
      "seasonId": "1d4e858a-48b5-4897-9b85-95a48f61ae59",
      "id": "aaf6fb50-b148-4a70-9bc7-ab5691d34e73",
      "name": "Pfeffer - Jaskolski"
    },
    {
      "id": "3f71bf00-c992-46cc-a4da-ed176d8f97dd",
      "name": "Mertz - Boyer",
      "teamId": "d311108b-47fe-406f-a3b8-c2afb1db94d3",
      "seasonId": "c811e3a1-2617-4bd7-ae3e-a0d04923e1ed"
    },
    {
      "seasonId": "9e47376c-9149-42eb-b846-91fe29b68e91",
      "id": "19aee0e1-7dcb-4c8a-addb-dd33899da82a",
      "name": "Batz LLC",
      "teamId": "5bfbf3ad-ffff-417b-a966-8738ff936ba9"
    },
    {
      "id": "674e7859-3933-4a8f-95bf-98f0434b6e84",
      "name": "Bergstrom, Green and Haag",
      "teamId": "378e06da-86cb-4595-8de3-0aafa8bac6b1",
      "seasonId": "9c921e99-8a5f-4ca6-8773-27eea332c3b5"
    },
    {
      "name": "Daugherty - Weber",
      "teamId": "23127bd3-fc74-4c05-a805-df59b2906bed",
      "seasonId": "948e3699-2a65-4a92-a14e-a48df58d2f51",
      "id": "4b62e562-2aa2-441e-a36a-c17f9857ccd6"
    },
    {
      "id": "a61f6bd1-4c89-4a2d-89e4-07b7dd37edc5",
      "name": "Dietrich and Sons",
      "teamId": "5d702a79-80c1-4ccd-bb6d-f612988e1b9f",
      "seasonId": "ea009f25-4fd4-4265-8481-9e4edeea3451"
    },
    {
      "name": "Abshire Inc",
      "teamId": "d5934946-f165-4c15-910a-402df60d1000",
      "seasonId": "63837a95-1fe0-4560-914c-73540c83cef3",
      "id": "c34f9793-be8c-4b56-a5d8-8a3119cce75c"
    },
    {
      "id": "a8870265-338c-41f9-aa6e-b459f77912e7",
      "name": "Daugherty, Monahan and Weber",
      "teamId": "d7e7e13d-3b96-4515-9eba-10be3a548f1e",
      "seasonId": "ad35d0e7-ac29-4069-9b36-70daee4260c3"
    },
    {
      "teamId": "7814e740-2527-4447-b591-eeba525fdd34",
      "seasonId": "68424211-e01a-4079-996c-006088aab6fd",
      "id": "68725028-4eaf-4637-a490-67622a968094",
      "name": "Waelchi LLC"
    },
    {
      "seasonId": "12c139d5-4282-4efd-afd4-c931979b35b6",
      "id": "eb033c88-7b1d-44a3-b943-6ef5aaeda1d0",
      "name": "Purdy LLC",
      "teamId": "2d6dd6c5-7ee6-4609-a215-33aabd4d1a93"
    },
    {
      "id": "e32509bb-86cb-48ed-8a05-a2be9223a8d7",
      "name": "Streich, Larson and Kuhic",
      "teamId": "88a98ac4-d375-40b8-9ebd-c856388054b5",
      "seasonId": "d8f97b7e-4eab-41e0-a4fe-77654745bf46"
    },
    {
      "id": "71b2e03c-5380-4be2-91de-e973a9b2748c",
      "name": "Hoppe and Sons",
      "teamId": "7c4a677c-9054-4309-940e-2ebbfbce4af5",
      "seasonId": "244f1638-d21e-4c39-9314-8f72e95ada6d"
    }
  ],
  "articles": [
    {
      "postAt": "2024-10-09 23:19:01",
      "seasonTeamsId": [
        "578d6416-1b4d-438e-a259-168707ff446a"
      ],
      "id": "fe35ee62-0865-4afe-aa9f-aa27db0566e3",
      "title": "Teneo caute illum cinis.",
      "content": "Tametsi custodia averto porro reprehenderit celer tepesco victus. Caterva verumtamen arcesso fugit. Acervus sit quos aut at animi arcus.Sodalitas expedita curis atrox. Aiunt cupressus acquiro vivo adhuc abeo. Anser ventosus conventus.Sequi bonus aggero. Architecto spes aegrus delibero corrupti alienus. Conculco curiositas audax ut casus talus vorax baiulus amiculum credo.",
      "draft": true
    },
    {
      "seasonTeamsId": [
        "7bbd4fd4-18bc-43a5-a882-c1fa2dcf7606"
      ],
      "id": "442e5336-7ab2-424d-a6f3-ad70df064908",
      "title": "Deprecator valens tandem conspergo cruciamentum molestias absens vado.",
      "content": "Consectetur templum vespillo totus abeo coniuratio. Thesaurus cupio tertius ea titulus dolore. Contabesco peior angelus bellum considero vesper laborum corporis pecus viriliter.Subseco crepusculum auxilium velut verecundia vapulus inflammatio adsidue. Demum utrimque aggero chirographum aedificium aequus vulnus culpa ultio ambulo. Arbustum versus cras vesco.Creber correptius vinitor curto ago baiulus. Templum admoveo itaque deprimo verbum cimentarius soluta depereo. Callide impedit sophismata theatrum cerno color victoria nihil tondeo abscido.",
      "draft": false,
      "postAt": "2024-10-09 21:05:34"
    },
    {
      "title": "Adsuesco clamo suspendo trucido cumque accusantium atque voluptates dens corrumpo.",
      "content": "Adeptio porro angustus aeneus harum. Civis deleniti carcer trans. Et baiulus speculum rem canto.Acquiro cohaero sono ratione vitium sint. Sapiente territo beatus conforto supra vulticulus labore. Aeternus valetudo arcus cubicularis suscipit defaeco.Velut autem certe vivo suspendo aspicio verto. Iusto crebro perferendis ducimus agnosco illum decens. Bonus tot cunabula sto versus decretum terminatio patior claro tenuis.",
      "draft": true,
      "postAt": "2024-10-09 21:29:27",
      "seasonTeamsId": [
        "a9b8aebc-869e-4dc4-97ff-6a39f7c16118"
      ],
      "id": "0bf62c31-bf5e-404b-ac6b-36e89fd677c6"
    },
    {
      "content": "Vulariter turba iste totidem bellicus attollo correptius decimus pecto. Tametsi denuo desino adaugeo tribuo temperantia sodalitas. Adflicto suppono quaerat.Aptus quod stips tepesco. Arguo stillicidium repudiandae causa vallum atavus. Sonitus debeo atrox taedium.Molestiae vitium aduro tres adopto derideo aveho carus. Calcar video confero vulgus coniuratio. Vesco dedecor curto summa aurum desidero decerno recusandae arto.",
      "draft": true,
      "postAt": "2024-10-10 09:17:29",
      "seasonTeamsId": [
        "a1a2cf61-d27e-40ed-af9f-ac1baf0e6d7a"
      ],
      "id": "35d59926-b7f3-4949-8fda-c9ac9efddd09",
      "title": "Acceptus delectatio canis veritas supellex ipsa carmen."
    },
    {
      "postAt": "2024-10-09 20:35:43",
      "seasonTeamsId": [
        "ff42a2dc-28b7-4942-968a-9e881482f087"
      ],
      "id": "bc16c6f2-f90a-44af-9408-e961c2141299",
      "title": "Terra substantia aetas.",
      "content": "Ambitus quisquam amo tui aetas. Allatus arbor facere balbus quaerat vetus adicio clarus deripio cattus. Usque sollicito decimus tredecim sortitus qui eveniet cavus tergiversatio quam.Antea crapula vae tabella demergo eveniet arbitro deripio audio. Accendo aequitas cito adhaero dapifer cohors curo. Delicate cibus adsuesco appositus utilis.Vobis necessitatibus cubitum aliquid. Demulceo dedico studio coadunatio succedo. Charisma ab tracto sumo.",
      "draft": false
    },
    {
      "draft": false,
      "postAt": "2024-10-10 17:43:19",
      "seasonTeamsId": [
        "00f118f7-3cf1-41ad-b4b9-195c53dc9f87"
      ],
      "id": "c52030b7-64c8-4a30-8c8d-31ad629ffa1a",
      "title": "Similique earum ater.",
      "content": "Corona tabesco theologus bonus accommodo aeneus. Balbus quam ait carcer clam similique utrum voluntarius vaco acsi. Credo thema amor candidus doloribus tenetur carpo adfero corporis.Deorsum aeneus constans termes cui adeo averto absens. Tenus admoveo sit conforto. Catena vestrum aqua aedificium delectus antiquus accommodo audacia certus odit.Vilis bellum curvo suus tergo. Asporto peior explicabo. Inflammatio angulus tertius ademptio venio tres veritas alter depraedor."
    },
    {
      "content": "Impedit molestiae consectetur adopto tum tempore. Id amiculum abeo. Cohibeo adipiscor corroboro crux cunae crastinus.Nisi vitium ubi demo crux porro absque tener tutamen enim. Thema ante virtus admitto ultra aut. Tyrannus combibo vulticulus eveniet.Vacuus curatio soleo sit optio totidem avaritia tantillus arguo. Venio valetudo antepono titulus crebro suus. Aestus delectus summopere tertius surgo coerceo vilis.",
      "draft": false,
      "postAt": "2024-10-10 03:15:34",
      "seasonTeamsId": [
        "f68714e5-f689-40c9-8b57-a762be3b8685"
      ],
      "id": "f39b3acf-672e-4d62-bc44-1ecd5f0afdbd",
      "title": "Adulatio vinco averto alter suasoria amplitudo valde."
    },
    {
      "draft": false,
      "postAt": "2024-10-10 13:27:36",
      "seasonTeamsId": [
        "0559328e-5fe3-46dd-bc41-86835708e0e3"
      ],
      "id": "c252b216-dcda-4a2e-a16d-c36a7d6d5c72",
      "title": "Beatus colligo crustulum tredecim arma corpus tabernus coaegresco.",
      "content": "Totus tametsi vulnero auctus arma verumtamen cura non absens. Varius capillus ullus apparatus cumque facilis desidero copiose. Conventus suscipio cibus autem.Combibo delinquo contigo circumvenio saepe compono turpis confero subvenio. Cunctatio adamo peccatus suppono thermae excepturi vitiosus ipsum consectetur. Crebro vita testimonium accusantium credo dolores denuncio.Cruentus pax curtus venia advenio eligendi suspendo harum nulla templum. Aperiam ipsam approbo comitatus sollicito compello aperio vulticulus. Aqua necessitatibus qui tantillus autem tertius."
    },
    {
      "id": "5f4265da-8bab-4c07-b8a6-a6b715ada983",
      "title": "Alveus tandem carmen candidus arto.",
      "content": "Suasoria tres causa creator correptius thalassinus vae ventus. Cauda laudantium cotidie conforto. Apostolus iusto attonbitus facere considero vetus spargo derelinquo voluptas deficio.Dedecor suscipio uxor creptio condico theca censura conculco. Tum auditor tondeo demens cohors clam super veritas earum concedo. Vesica peccatus admoneo quam statua.Decens curvo delinquo vergo utique. Tego umbra maxime quas. Et velit volva comis cohaero bos.",
      "draft": true,
      "postAt": "2024-10-10 08:32:24",
      "seasonTeamsId": [
        "835695cf-86a3-4666-8c10-4cdfa4bc53a6"
      ]
    },
    {
      "title": "Speculum termes tam tendo.",
      "content": "Comptus distinctio terminatio speciosus tamquam tondeo patior nemo. Vitium vita tabgo crudelis. Bellum valens tergeo vesica acceptus dolorum ascit aequus.Conventus amoveo angulus. Comptus utrum magni adfero. Celo vir vel umerus clibanus totus barba utilis aeternus consequatur.Cotidie utilis clamo bonus eum acervus pauci damno aliqua. Subito defetiscor adulescens conforto sapiente terminatio. Cauda talio defero dignissimos quod carus depereo error caecus.",
      "draft": true,
      "postAt": "2024-10-10 04:56:36",
      "seasonTeamsId": [
        "6e6786d3-a858-42dc-b48e-12797e8a900d"
      ],
      "id": "361e8247-f250-45c2-8108-6951dff28905"
    },
    {
      "seasonTeamsId": [
        "30c97299-ed31-4686-a6b6-f8baefb4773c"
      ],
      "id": "cc45e4bc-5ad2-4062-83a8-94e9e42da168",
      "title": "Defero nobis color sustineo decipio.",
      "content": "Tenetur succurro velut agnitio. Conservo utpote vereor bestia alii ante nemo coaegresco suscipio altus. Balbus amplexus cena mollitia supplanto rerum.Aurum asporto correptius carpo cruciamentum vigor nam. Adfero vesper volubilis certus carmen timor apud. Communis vix solitudo adinventitias in labore.Decens creator laborum vicinus eveniet sodalitas. Comparo infit sub assumenda. Viriliter auxilium a astrum clementia statim.",
      "draft": true,
      "postAt": "2024-10-09 20:54:51"
    },
    {
      "postAt": "2024-10-10 06:48:24",
      "seasonTeamsId": [
        "1ed19cad-e182-43c3-937e-5a2024cbd5e2"
      ],
      "id": "7620ade5-1957-4ad9-983f-7808c3a4f1fb",
      "title": "Careo vitium vobis sufficio utrum vitae et.",
      "content": "Virga illo usitas constans soleo absorbeo. Amplitudo volva calco ipsa consuasor pax. Atque vomito dicta vulnus varius numquam totam.Averto ait vehemens vito capillus. Aduro asporto vespillo utor possimus torqueo. Sunt unus summopere esse corroboro talio trans tabula pauper.Asporto unus amoveo thesis caterva demulceo commodi pariatur. Quaerat defleo porro calculus. Inflammatio verus cavus.",
      "draft": false
    },
    {
      "postAt": "2024-10-09 20:29:36",
      "seasonTeamsId": [
        "9f085048-b876-4e65-b1ec-67f1c1b42965"
      ],
      "id": "d297a984-217f-49de-a83f-fe443ecc55a2",
      "title": "Aegrus tertius velociter temperantia spoliatio cavus summa creber decumbo.",
      "content": "Contigo utroque tabgo. Beneficium decerno patrocinor venustas ustilo varius ventosus alius. Angelus doloribus curto minus debilito thermae cibo clam theca clibanus.Contra pecus colo admoneo. Valde certus asper dolorem. Contabesco careo infit valens speciosus.Acervus socius natus. Verecundia claustrum videlicet aliquam. Coruscus socius adhuc occaecati.",
      "draft": false
    },
    {
      "id": "12c0b3b4-4acd-4e60-a027-113ec5cb4ec9",
      "title": "Architecto bardus cupio.",
      "content": "Benigne celo sub vos vita debilito cunctatio placeat culpa. Thymbra carmen modi antiquus benevolentia. Averto acquiro illo labore carus amplus umbra patrocinor cribro timidus.Caput vestrum alioqui constans aeternus tergo fugit vulgivagus modi temptatio. Pecto ullus victoria vigor provident sumptus. Bis comitatus concido exercitationem.Adhaero ventosus agnitio decimus adhuc minima aut defetiscor aggero. Utroque aetas suppellex aliquam. Vindico numquam somnus ducimus vester victus theologus damno creta consequatur.",
      "draft": true,
      "postAt": "2024-10-10 10:15:58",
      "seasonTeamsId": [
        "391b85b2-4c59-43c4-b3cf-9ba303006475"
      ]
    },
    {
      "title": "Combibo alii ab hic absorbeo derideo adstringo armarium trado.",
      "content": "Decens arcesso consequatur cerno subiungo desipio dolorum doloremque dedico abundans. Demulceo suspendo defendo urbs. Velit vulgivagus audentia.Pel veritatis adulatio tremo nobis. Abscido comburo denuncio somniculosus comparo balbus vulnus. Vicissitudo adipiscor cattus.Solio utrimque calcar commodi benigne vicissitudo conculco supellex doloribus una. Vallum corrupti harum sonitus sum porro claudeo. Illum corroboro depono nam tredecim celer cariosus.",
      "draft": true,
      "postAt": "2024-10-10 02:23:14",
      "seasonTeamsId": [
        "106213e7-e747-4927-815c-fcc7ec4bfdcf"
      ],
      "id": "ef6a3e63-9e8f-4c90-b01e-01ed4753403a"
    },
    {
      "id": "c5f037c3-81b9-4dc5-b150-31a7f9bf2813",
      "title": "Vehemens cunctatio cursim cursus delibero qui.",
      "content": "Tamquam veritas tubineus volaticus utroque damno conturbo alias acceptus. Aliquid utroque vix virga vir adamo spero sophismata abstergo denego. Sequi centum vicissitudo.Studio sperno volaticus. Expedita adnuo virgo claudeo canis. Molestias cenaculum sponte.Depereo trucido vigor stultus damno ceno impedit audeo. Vomito vacuus totam delibero vorago. Contabesco attollo in arto aeger via utroque coerceo studio ver.",
      "draft": true,
      "postAt": "2024-10-10 04:08:17",
      "seasonTeamsId": [
        "90fee157-5392-4e18-898e-cf37a7952b40"
      ]
    },
    {
      "content": "Coruscus versus atavus valde vacuus. Taedium velit auctus carmen. Ulciscor subnecto eligendi decimus vitiosus laboriosam defluo.Amiculum ducimus sumptus arma turba sustineo. Comes bellicus desparatus. Clibanus explicabo vaco admitto spiculum.Vicissitudo tactus comminor adsidue comitatus valde. Illum claustrum verbera capitulus argumentum minus utroque textilis. Aiunt taedium vorax crustulum expedita.",
      "draft": false,
      "postAt": "2024-10-09 21:00:03",
      "seasonTeamsId": [
        "4894b9ac-927d-4d56-87e7-c1e5b4b87894"
      ],
      "id": "623d982f-8b39-4017-a026-9af5099e3ddb",
      "title": "Deleniti vestrum copiose tracto peccatus."
    },
    {
      "seasonTeamsId": [
        "34891f2e-fd79-4346-bc01-9c8cf813ad23"
      ],
      "id": "67c2afef-b704-43fb-96e5-4eae8c1d2fdf",
      "title": "Sto aegrotatio amet anser socius deinde tactus placeat provident.",
      "content": "Caute tutamen trepide sopor debeo demulceo. Surculus textus coerceo itaque possimus coniecto acies conscendo id. Acidus ascit suffragium praesentium.Est dolor eaque. Caelum tamquam auctor tempore conspergo corpus bonus. Claro atrox cohibeo agnosco abstergo coaegresco cumque conventus assumenda tergo.Demulceo arto terror confido sto arma commodo. Tumultus decimus subiungo claro verto turbo arto doloremque tactus cernuus. Vir auxilium desolo culpa.",
      "draft": true,
      "postAt": "2024-10-09 20:38:39"
    },
    {
      "id": "530658da-df86-44fc-ae5f-353c3aeacc20",
      "title": "Curvo audentia conscendo vos ambitus.",
      "content": "Comedo atrocitas varius. Eum recusandae depono theca tum acies perferendis. Nam desolo claustrum bene carmen utpote.Cibus sub canto sordeo annus cotidie audacia advenio. Defungo cruentus verto itaque copia demitto. Surculus sum non.Repudiandae explicabo amita expedita clarus. Soluta subseco comes urbanus vulgivagus. Voluntarius praesentium tergo aequitas solitudo sum.",
      "draft": false,
      "postAt": "2024-10-10 17:09:00",
      "seasonTeamsId": [
        "adedb1c9-bdff-460a-aa54-d340fe567f49"
      ]
    },
    {
      "postAt": "2024-10-10 00:55:14",
      "seasonTeamsId": [
        "62dec217-710c-4649-b04a-69d4c2dd5fb0"
      ],
      "id": "71fd73c7-27fc-4eb0-8b8a-ab694e2e9c85",
      "title": "Inventore officiis dolor strues virgo tumultus suffoco numquam quibusdam creber.",
      "content": "Vorax ademptio viscus subvenio adversus creo demulceo validus temporibus strues. Aliquam tergiversatio sopor adipiscor ullam cometes amita. Bibo caveo xiphias conventus at triumphus volubilis.Tergum angulus alius praesentium somniculosus. Aperio traho carpo sto. Auctor voluptas usque absum reiciendis turbo utor vulticulus volo.Vestigium deprimo varietas vergo distinctio suffoco. Neque victus theca thalassinus dolorem suffragium suasoria valde. Dens truculenter aranea spectaculum suadeo conventus incidunt ventito.",
      "draft": false
    },
    {
      "postAt": "2024-10-10 08:47:18",
      "seasonTeamsId": [
        "33f6a5a3-0868-4824-81e8-a7043c782973"
      ],
      "id": "c4052aab-9336-4c14-880e-562e913d5a8c",
      "title": "Vespillo qui cruciamentum incidunt admoveo.",
      "content": "Ea tondeo vigor sumptus comes fuga. Creo sufficio amoveo distinctio ipsam. Tripudio apud aggero video tondeo unus adeo pel.Terror delinquo arcesso credo thalassinus vulticulus amiculum cognatus usus crebro. Adsuesco valens ars ascit. Suffoco solutio tracto cunae quisquam cado tenetur cauda.Cum varietas aliqua molestias summisse numquam usque. Adeo caveo sophismata. Sortitus comprehendo sumo aegrotatio exercitationem conitor defluo.",
      "draft": false
    },
    {
      "seasonTeamsId": [
        "9960455e-e508-4e5c-9727-9901893e40a1"
      ],
      "id": "a447430f-d13d-4eb1-96c4-f2d7a6deb5bf",
      "title": "Illo impedit concido delinquo crur caries voluptate cicuta.",
      "content": "Temperantia confugo caput aestus peior adeo odio campana adamo. Admoveo adamo cattus strenuus venio a autem avarus valens veritatis. Subiungo accedo consuasor angelus arbor virga tristis aequitas.Taedium alo denuo a vetus. Somniculosus tempore vetus constans eveniet urbanus cilicium aliquam. Veritas defero perspiciatis careo vox tero video voluptates ancilla.Dignissimos patria viriliter cruciamentum vobis canonicus tui sollers aro. Corona cinis sursum voluptas. Valeo cultellus dolore utpote pariatur temporibus.",
      "draft": true,
      "postAt": "2024-10-10 17:26:32"
    },
    {
      "content": "Vespillo addo aeger vilitas. Admiratio corporis incidunt clibanus paens bos est. Amiculum atrox aranea.Cavus triumphus conor solvo deleniti attollo itaque defendo cetera. Suasoria arcesso sto virgo ventus anser sophismata ullus curvo. Quaerat trans carmen trado acquiro dolore acervus.Delinquo templum arbitro vorago carcer stips tego conscendo sodalitas. Adeptio defaeco nulla. Inflammatio aduro ventito confero contra sopor degusto appono amo territo.",
      "draft": false,
      "postAt": "2024-10-09 22:27:01",
      "seasonTeamsId": [
        "5d9a43e5-6c78-4f3b-aa33-adf5f33b6843"
      ],
      "id": "9779f173-2946-4e76-b58c-9b670ba9bdf7",
      "title": "Teneo deorsum annus optio pel terreo vehemens suasoria degusto."
    },
    {
      "title": "Adsidue illum expedita causa caecus ullam calamitas spiculum admoveo.",
      "content": "Adflicto statua tero acies tego. Argentum in autem verbera denuo. Thema amor usitas vicinus vetus ver arcus.Conitor temperantia ago. Aliquid vere conspergo capto acer atqui. Ater commemoro subiungo contigo omnis undique.Ultra defungo asporto votum deduco suggero damno provident delectatio pel. Arguo custodia avarus deputo vehemens ambulo umerus quibusdam. Adnuo tabesco aer adicio vergo.",
      "draft": false,
      "postAt": "2024-10-10 13:36:13",
      "seasonTeamsId": [
        "632e2680-f496-4d3f-ac95-19a447dad2b3"
      ],
      "id": "a0706c45-b42e-47df-8356-a18d9e839db6"
    },
    {
      "id": "c63eb2e3-95a3-4e82-b6bd-4d2672c3ce42",
      "title": "Ago veniam aro cinis stultus rem vero.",
      "content": "Vociferor quos vilis adaugeo voluptate termes cruciamentum vehemens. Volva ea surculus. Nesciunt claudeo coniuratio facilis vox.Canis patria sursum abbas pectus spiritus beatae. Adulatio tubineus minus thesis decipio absconditus vesica culpo. Corrumpo sollicito peior aureus xiphias capio.Trucido pecus ultra placeat adipisci tenuis aspernatur dapifer. Accusamus autus curso veniam. Bestia unus ubi cervus.",
      "draft": false,
      "postAt": "2024-10-10 06:21:22",
      "seasonTeamsId": [
        "ff42a2dc-28b7-4942-968a-9e881482f087"
      ]
    },
    {
      "id": "21c950dd-e8a5-4cee-a89a-9d75cc54bf13",
      "title": "Celo vaco territo.",
      "content": "Cresco soluta debilito despecto. Saepe vel labore accendo. Admiratio at desparatus appositus aperio universe caries baiulus vigor.Aequitas cogito comminor vix clam carpo ascisco trepide laudantium. Aperio trado esse pauper calamitas cur voluptate. Comis vilicus tabesco tendo carbo thesis copiose arceo cernuus corona.Vulnero necessitatibus expedita vester degusto. Decet celer tot somnus pecus combibo. Adsuesco claustrum eveniet nihil voveo beneficium ciminatio cetera triduana.",
      "draft": false,
      "postAt": "2024-10-09 20:36:02",
      "seasonTeamsId": [
        "16f78128-73e1-48cd-9d02-e5d9b03279d3"
      ]
    },
    {
      "draft": false,
      "postAt": "2024-10-10 18:05:14",
      "seasonTeamsId": [
        "9e1acfd2-b743-43f7-a8f6-0ea8e0f94f4e"
      ],
      "id": "8223b2df-57fd-4be7-a2b4-d5f2b4baed6b",
      "title": "Vinculum conculco aqua sum anser vulnero tres comparo usque contabesco.",
      "content": "Vulgus adsidue adaugeo damno admitto. Callide claudeo tergum usitas ara vacuus auditor succedo. Antepono defero sed.Taceo tandem beatae spargo vigor corpus facilis avaritia. Explicabo ad paulatim necessitatibus. Demo sortitus credo delinquo suscipit confido caterva.Consequatur depulso corona desipio iste desidero. Aestus dolor somnus curiositas sollers circumvenio adficio umbra creta. Velum capto iste ademptio sollicito alo tutis compello nobis vinum."
    },
    {
      "postAt": "2024-10-10 18:18:42",
      "seasonTeamsId": [
        "71fb828d-224e-48de-8d1b-db9261f3b3dc"
      ],
      "id": "7a2285a9-d7cb-4151-84cd-37dd5f45d778",
      "title": "Civis assumenda tantillus sulum ambulo tonsor.",
      "content": "Vulpes vado ustulo labore conor impedit bonus aut victoria cubitum. Tergiversatio voro conspergo subseco illum thesis vulpes cometes. Ullus clementia adeo totam antepono alo beatus.Ulterius accedo dolorem conduco suadeo. Capio tergo copia vindico amor. Incidunt templum carus tergeo sapiente.Odio corona depopulo abstergo tempora trans debitis terebro. Perspiciatis odio deserunt admitto textilis amo articulus confero. Depereo comparo corona trado tego casso.",
      "draft": false
    },
    {
      "draft": true,
      "postAt": "2024-10-10 00:09:37",
      "seasonTeamsId": [
        "578d6416-1b4d-438e-a259-168707ff446a"
      ],
      "id": "2f3d2529-5602-4283-a28e-eaa923fee323",
      "title": "Speciosus rerum vulgo copiose colligo distinctio cernuus architecto.",
      "content": "Pectus venustas curto molestias corona. Spectaculum cupressus accendo quasi corroboro tumultus delicate. Volo speculum pecus audacia vis minima.Tabella desidero curto venustas possimus. Cunabula ex theatrum copia conatus crudelis. Capto decet pecus.Amoveo sono nesciunt villa pel caries sequi auditor. Debitis studio vere aliqua auditor canis. Suscipit auctor delego."
    },
    {
      "id": "122742fd-2d2b-446f-9fbe-066ade7fc3fb",
      "title": "Tergeo ipsa carus quod minima.",
      "content": "Aliquid abutor calamitas asperiores. Supellex adinventitias sustineo animus tempore quaerat utroque cunabula defaeco vinum. Tam vestrum curto calamitas.Aqua annus delicate sumptus ipsa sodalitas maiores tempora somniculosus. Aureus balbus eaque tantum praesentium. Tutamen cribro et nostrum canonicus desparatus valeo speciosus porro unus.Vivo adsidue utroque. Tepidus uredo quo utique degusto aeger cena crebro. Adiuvo canonicus certe talus tumultus astrum ter corroboro cui pectus.",
      "draft": true,
      "postAt": "2024-10-10 00:17:51",
      "seasonTeamsId": [
        "53f2f735-f190-4df0-a01c-bbff1c8a1d32"
      ]
    },
    {
      "draft": false,
      "postAt": "2024-10-10 05:37:43",
      "seasonTeamsId": [
        "00f118f7-3cf1-41ad-b4b9-195c53dc9f87"
      ],
      "id": "bd599aff-db5d-4b8b-96af-019205be0257",
      "title": "Demonstro tum corporis terror barba ver voluptate.",
      "content": "Curto dedico cuius talio fuga impedit conventus. Ago confugo depopulo thermae speculum. Verumtamen charisma usque teneo compello coniuratio sed solus antepono delectatio.Artificiose triumphus libero. Repellendus pel blanditiis vos amitto cariosus fugit. Culpa demonstro acquiro tactus uredo clementia utrum defaeco.Umerus copia sonitus absorbeo alius. Mollitia voro defleo vaco adstringo xiphias anser. Conventus acervus cognomen conculco volup cumque sapiente vesper vitiosus."
    },
    {
      "id": "54b745a2-d744-4057-bc11-6a4ad7697d9a",
      "title": "Asperiores bellicus pecus theologus dolor suus quo cubicularis aestivus cubicularis.",
      "content": "Volutabrum terga ademptio usitas cohors comis. Dedecor aegrus aiunt aegrotatio tolero atrocitas stabilis. Adficio deinde maiores veritas cernuus vereor.Patior virgo accusator auxilium valeo iusto. Clementia comminor clementia aro argumentum tantillus ipsa absens placeat. Caveo curiositas perspiciatis timor turpis cura veritas.Cunctatio volup quidem labore anser antea summa tracto thymum. Viriliter tracto summisse admoveo asper aufero caput corrupti. Adsidue ustilo ab desipio dolorem alveus solus tepesco.",
      "draft": true,
      "postAt": "2024-10-10 09:21:59",
      "seasonTeamsId": [
        "4906daab-a9d5-443c-9d1d-d40f30480ad9"
      ]
    },
    {
      "postAt": "2024-10-10 00:01:21",
      "seasonTeamsId": [
        "21576efc-67eb-41c1-aa5e-56276dbb521b"
      ],
      "id": "e055e1b1-1ce7-43ea-8230-f56ac6a33501",
      "title": "Cribro thalassinus soleo optio verbum canonicus.",
      "content": "Aegrotatio cupiditas absens. Bardus bibo vulgus. Adflicto bestia umquam aduro solus aegre delego vociferor averto asporto.Benevolentia theca mollitia delego caelestis cuppedia voluptas in vulpes somniculosus. Celer turba tonsor vel. Accommodo ullus desipio crastinus argentum sub.Appello sodalitas decerno solvo una. Callide trans comis possimus facilis bellicus titulus ratione tempus. Viscus convoco aegrotatio verbum supplanto abscido caries.",
      "draft": true
    },
    {
      "draft": true,
      "postAt": "2024-10-09 21:02:22",
      "seasonTeamsId": [
        "69306776-c05a-4c47-82c1-028f6c1b5ec4"
      ],
      "id": "b15cc27d-b8ab-4974-99fb-fa39985f5ef1",
      "title": "Abundans cicuta vilis talus usus vindico tabesco ventito.",
      "content": "Alii adhuc quis crudelis tantum magnam sol. Culpo comptus charisma illo adfectus aeternus. Volup explicabo aufero.Summa crudelis amaritudo volutabrum tamquam. Versus degenero certe iusto spes temperantia. Tabella ulterius verbum.Arto defleo casso subnecto. Texo commemoro creber texo pecto tolero versus amiculum inflammatio. Vilicus ambitus timor tactus."
    },
    {
      "draft": false,
      "postAt": "2024-10-10 12:34:58",
      "seasonTeamsId": [
        "835695cf-86a3-4666-8c10-4cdfa4bc53a6"
      ],
      "id": "15a3339f-845f-477a-842a-01a18d53c4e2",
      "title": "Vito terra totidem quidem.",
      "content": "Cuppedia demonstro omnis cur. Valetudo stips audacia carus textus conturbo. Suus cibus ancilla.Derideo urbanus canonicus voco substantia. Strues amet vigor tergeo cinis commemoro adfero deserunt acquiro ad. Caste patria denuncio balbus.Enim ceno vilis casus cito ventito. Apostolus possimus toties cruentus pauper. Suadeo odit acceptus consuasor denique trepide."
    },
    {
      "content": "Animus adamo surgo mollitia eos. Aeger ademptio dapifer votum tempore. Vergo copiose verecundia cibo degusto.Acceptus avaritia thesis aqua nam quo adeo quisquam volaticus id. Adiuvo cubitum verus quod aureus volubilis capio vulgaris angustus quos. Odit alienus bellicus pariatur volaticus adicio.Comes maiores consequatur. Sed demoror attonbitus. Victus temeritas vere ascisco vesica coniuratio.",
      "draft": true,
      "postAt": "2024-10-10 03:09:39",
      "seasonTeamsId": [
        "12c25b01-d000-4d0b-9d2b-a7f24140f7ed"
      ],
      "id": "b1f7f619-7a0b-4df4-9814-a8e376908d33",
      "title": "Tandem sumptus pel substantia usque."
    },
    {
      "title": "Officiis tersus tolero fugit cena coniuratio.",
      "content": "Adulescens optio cura illo. Aranea ademptio coniuratio vito adicio adeo undique desolo. Adficio stipes aeneus carus amplus viriliter beneficium basium sono amplus.Talio cornu vulgus vivo ubi quo agnosco. Illum varius arx tabernus tempora defungo deleo depereo. Sublime tam contigo labore cruentus cognatus titulus.Abutor adsum deputo tamen terebro. Vix utpote demitto aufero illum volva magnam vesica fuga ab. Campana infit vos avarus vehemens.",
      "draft": false,
      "postAt": "2024-10-09 20:53:32",
      "seasonTeamsId": [
        "104621e7-feb4-4c0b-ba40-99ce7f0dabb9"
      ],
      "id": "a6a497d8-231f-409c-8e24-4b311e6bd37f"
    },
    {
      "id": "66fda03f-ed31-438a-a45f-ac52dd8f6371",
      "title": "Vulticulus stillicidium subiungo.",
      "content": "Tondeo vitiosus voluntarius curso curtus adfero tonsor vix victoria animus. Auditor viscus utroque urbs aggredior. Verto demergo vix.Peccatus autem terga totus degenero currus. Uxor cupiditate spiculum sol absconditus. Textor summopere usus paens concido.Comptus aequus damnatio ventito usque creber aperte cogo patruus. Tergeo molestiae cernuus spargo sortitus. Alioqui maiores illum contego facere coma theca averto.",
      "draft": false,
      "postAt": "2024-10-10 17:52:05",
      "seasonTeamsId": [
        "07ae6b3c-9e5c-48d2-a643-1ff57d056143"
      ]
    },
    {
      "title": "Vestigium suscipit sursum abbas.",
      "content": "Ultra sophismata conforto antea callide aggredior defaeco canis. Ceno ullus thesis vindico ustulo terebro vero. Canonicus decumbo tandem molestiae vulgo suppellex.Ustulo fugiat custodia velociter valetudo vulticulus stella color ex. Minima bibo aiunt voluptatem versus substantia voro minima amor. Incidunt cicuta aeger deleo solvo suadeo.Alienus arceo cursim vulgus. Cognomen conatus clarus aequitas. Convoco anser substantia valde asperiores ocer.",
      "draft": false,
      "postAt": "2024-10-09 19:27:38",
      "seasonTeamsId": [
        "6e6786d3-a858-42dc-b48e-12797e8a900d"
      ],
      "id": "17b8cbfd-8dc1-433f-8f9d-d0e3e2b15dba"
    },
    {
      "id": "941566de-8193-4306-9d6d-09e4e6896d9c",
      "title": "Alter illo vesper adfectus ascit quos causa.",
      "content": "Carcer deputo quod coadunatio cur thymbra illum sumo absum tantillus. Voluptate delectatio spoliatio celer eum vulariter alienus iste. Stultus inflammatio dapifer vitae suffoco vesica infit maxime.Suscipio patria desolo in. Quae accendo exercitationem auxilium blanditiis. Caveo conduco libero cetera caecus porro cotidie.Civis auditor conculco denego virtus cohors adipisci. Decipio civitas comburo repudiandae denique villa. Sunt abduco defessus temporibus cursus sulum suus venio cras.",
      "draft": false,
      "postAt": "2024-10-10 01:37:56",
      "seasonTeamsId": [
        "33f6a5a3-0868-4824-81e8-a7043c782973"
      ]
    },
    {
      "id": "43994f69-9e07-45d8-a80e-d87df4876f5b",
      "title": "Alioqui amaritudo currus caveo apostolus tersus confero provident.",
      "content": "Crinis uterque uberrime umerus. Aer temeritas numquam tergiversatio tenus demitto capio bene. Voluptatum demo verbera stella ver coniuratio administratio.Dapifer agnosco vester. Canonicus careo ullam velut vereor alo turba sollers. Adficio sint suppellex vulgo talus cura.Suus mollitia ipsum. Tergo tribuo voveo. Umquam arceo expedita necessitatibus.",
      "draft": false,
      "postAt": "2024-10-10 06:34:59",
      "seasonTeamsId": [
        "e2ac97e5-74fd-45ee-9d29-680e6ed15383"
      ]
    },
    {
      "title": "Sponte coepi amor arbustum cras cursim adipiscor sapiente sunt amaritudo.",
      "content": "Utroque apto aegre. Vix argumentum adstringo trado aggredior dignissimos delectatio amita uter commodi. Degenero vomer facilis.Adduco depopulo accendo deprecator ager combibo confido considero vitae deduco. Vado aggredior doloremque summisse via. Tepidus cimentarius debeo exercitationem coma usque arto denuncio sufficio aiunt.Cultellus ascit demergo sequi strues clibanus adfero. Ceno amoveo stipes. Adhaero sodalitas tactus calcar suffoco capillus.",
      "draft": true,
      "postAt": "2024-10-10 17:27:10",
      "seasonTeamsId": [
        "afb8e370-af54-4043-8e50-05f47fab644a"
      ],
      "id": "dac65189-4f94-41af-9b1e-223a50917af9"
    },
    {
      "content": "Vero constans ustulo. Carmen currus voluptate calco atrocitas neque neque averto. Abscido alter velociter suffragium vallum aiunt placeat absorbeo sollicito.Deleniti certus curtus cruciamentum iste viduo confido. Amplus unde ceno sopor vomica pauper vir tredecim. Cimentarius tantum denuo pel autem valde succurro.Capillus valetudo stipes. Conforto nostrum aggredior. Crur ago video aperte defaeco veniam totam annus enim soleo.",
      "draft": true,
      "postAt": "2024-10-10 09:08:15",
      "seasonTeamsId": [
        "a2333f9c-7226-4bfe-9014-39b5803c22c3"
      ],
      "id": "ddb90ab8-a4da-4ab0-b70e-8f3a7e928337",
      "title": "Soluta nisi arcus cohibeo adfectus solus."
    },
    {
      "id": "20a55640-4688-4982-ab3f-f7bc88ebd20a",
      "title": "Tandem amoveo super minus.",
      "content": "Desino utique terror carus sumptus cogito aptus carpo vigilo antea. Caritas ipsa ambulo. Suppono denuncio laboriosam degenero.Balbus umerus vesco cognatus una aspernatur doloremque volaticus. Dolor antepono decipio dolorum abutor tam omnis veniam comminor. Vitae suppono arma degenero assentator.Nisi aegre commodi trado crur antepono cursim antea. Vere dens apostolus ipsam. Illo tamisium corpus cresco.",
      "draft": false,
      "postAt": "2024-10-10 06:14:46",
      "seasonTeamsId": [
        "25232f33-2372-4ab8-abaf-c1c782bca176"
      ]
    },
    {
      "id": "d4c8b153-c035-4729-9593-c195494dd899",
      "title": "Conculco vallum cohors decipio dens.",
      "content": "Animus blandior tot aduro arbitro cruentus tripudio. Asper odio trado verbum amplus stultus velociter taedium tergum territo. Tenus solus campana.Decretum caterva claro. Valetudo dedecor timor spargo curso vilitas odio umerus viridis. Charisma soleo ullus vaco.Thymbra coepi ullam adopto. Supra demoror vos itaque tamquam amita virtus ex amplitudo summa. Cultura vesica sit utrum autem nisi.",
      "draft": false,
      "postAt": "2024-10-09 21:48:40",
      "seasonTeamsId": [
        "ff42a2dc-28b7-4942-968a-9e881482f087"
      ]
    },
    {
      "postAt": "2024-10-10 14:40:50",
      "seasonTeamsId": [
        "ce3ef6df-8cb7-4367-a20f-72f076caf22a"
      ],
      "id": "f2ada971-76a8-4c83-97d1-436a1725d300",
      "title": "Accommodo adulatio spiritus auctus quisquam non tunc.",
      "content": "Clementia vestigium inventore terga calco. Conturbo auditor conculco valde tero velum. Volup cibus caput provident.Ducimus auditor tabernus absens aestivus venio pecto spes. Pel confero est synagoga defendo amita uter usus volva. Vicissitudo templum cicuta vomito.Tempore enim strues vapulus numquam patria minima alius averto vulgaris. Desino apparatus tempus tero arguo numquam contabesco sublime iure. Chirographum civitas catena.",
      "draft": false
    },
    {
      "draft": true,
      "postAt": "2024-10-10 02:46:45",
      "seasonTeamsId": [
        "34891f2e-fd79-4346-bc01-9c8cf813ad23"
      ],
      "id": "e3504232-7e96-46e7-bf3c-c05a40cf0e7a",
      "title": "Iusto unus aedificium taedium delibero.",
      "content": "Admoveo consectetur crepusculum aurum at conforto cunabula aegre. Angulus adfero adipiscor advoco thesis laborum supra tero viduo. Quis vilitas cubo stella.Cetera verumtamen comparo ter viriliter corroboro varius. Voluptas usitas apto vapulus amplitudo summisse aegrotatio. Alter calco demitto theca cenaculum vicinus confido curtus consequatur solio.Caput accusantium catena adulatio utrum nobis bos. Synagoga concido aegrotatio apto conspergo. Spiculum turpis conicio demonstro."
    },
    {
      "content": "Natus theologus celebrer tumultus adnuo cohaero. Absens numquam acsi coma crastinus ullam verumtamen textus caries defluo. Viriliter arcus vos vomica surculus suppono.Consuasor torrens pax alveus tenetur vulgaris. Virtus somnus solitudo. Caecus veritatis studio amet tremo articulus cunae.Damnatio tenetur ultra pel caste. Carcer thermae amita soluta demo. Congregatio animus temporibus.",
      "draft": false,
      "postAt": "2024-10-10 08:31:47",
      "seasonTeamsId": [
        "7bbd4fd4-18bc-43a5-a882-c1fa2dcf7606"
      ],
      "id": "9c54f893-152a-424e-9f9d-9703b9e29cff",
      "title": "Succurro una distinctio certus textilis supra."
    },
    {
      "content": "Vulnero cena vicinus volutabrum admiratio provident. Animadverto rem tracto contra comprehendo vero tabernus. Creator delicate minima illo alius caput mollitia repellendus triumphus thesaurus.Desino atqui adsuesco ultra beatus cubo. Tersus sui degero velut claustrum alienus. Adsum patria rem adiuvo eaque vomica crinis alii.Antepono audentia voluptas tondeo facilis solitudo appono ventito cruentus. Arcesso arbustum vivo quidem admitto demonstro. Aufero abundans tollo usitas.",
      "draft": false,
      "postAt": "2024-10-10 09:42:44",
      "seasonTeamsId": [
        "1a68480b-b4bd-4b01-b326-a0ef92ca6431"
      ],
      "id": "d3579abb-1c78-4461-895c-366f4c37df0a",
      "title": "Cubo defessus communis."
    },
    {
      "seasonTeamsId": [
        "3b617e85-75eb-4014-8c9a-cfa49461e96d"
      ],
      "id": "fd1e3e71-4550-4095-8308-b5b57647b92e",
      "title": "Coniecto pariatur benevolentia inventore curiositas ceno animus armarium.",
      "content": "Templum audax terebro torrens fuga. Tenuis tenus trepide adduco deputo cimentarius cometes accommodo. Tener decimus antepono voluptates creber audeo animi.Arca desidero videlicet cras tolero. Sumo ex ratione carus rerum quidem undique aut adinventitias vulgaris. Quod coniecto beatus aranea usque.Audeo totus debilito termes coniuratio candidus textilis cenaculum currus usque. Tricesimus stella adfectus suspendo casus odio tabesco. Sunt thalassinus adimpleo autem coma voluptatem capto conduco debeo.",
      "draft": true,
      "postAt": "2024-10-10 15:17:03"
    },
    {
      "draft": false,
      "postAt": "2024-10-10 18:39:40",
      "seasonTeamsId": [
        "4894b9ac-927d-4d56-87e7-c1e5b4b87894"
      ],
      "id": "4772b6fe-9e2b-42f1-85a4-240bf0f8e392",
      "title": "Tibi volup tabula solio.",
      "content": "Aeternus vulnero tempus suadeo tonsor animus. Incidunt adstringo debitis corrigo certus cena. Allatus solus amaritudo aperte.Exercitationem exercitationem conservo nesciunt quae. Ter argentum terebro demo adfectus alienus surculus ambulo. Amo delectatio concido colo suggero neque magni caveo optio tribuo.Voluptates volaticus civitas thesis demitto. Quae casso tripudio tenus asporto corona theatrum combibo inflammatio bellicus. Possimus voluptates utrum aetas defero."
    },
    {
      "seasonTeamsId": [
        "8a475a38-1ed1-4987-abb9-67dca08a4623"
      ],
      "id": "86b33e3d-1f5d-429c-9021-ebbc0459c02d",
      "title": "Decor uterque taedium.",
      "content": "Consectetur delectus amitto denego crebro bestia curvo animus comprehendo. Nobis admitto eligendi amita. Carus pax vero aqua trucido temporibus vulariter vobis aspernatur.Conspergo umerus terebro cogo conturbo. Laboriosam certus tripudio vita venio. Appello aestus earum ipsum cunctatio tabernus consequatur urbanus versus aestus.Arguo solium virga termes torqueo. Vulticulus demonstro sumptus depereo. Doloremque texo tollo.",
      "draft": true,
      "postAt": "2024-10-10 07:39:53"
    },
    {
      "id": "5dc4ca76-5fb4-4e3d-a027-9d21fe99e62d",
      "title": "Vulariter administratio thorax tutamen veritas.",
      "content": "Degusto triumphus speciosus virtus spoliatio tamen appello ut sequi. Arbor auxilium verto. Necessitatibus conforto terebro deorsum tollo tres.Nisi patruus impedit sublime cervus nesciunt voro asperiores. Vicissitudo quaerat vel laudantium attonbitus creber. Facere coerceo alius theatrum.Cuppedia venio aggredior adipiscor adopto harum provident. Saepe suscipit aperte speciosus. Impedit alias utilis autem at blanditiis textor atque.",
      "draft": true,
      "postAt": "2024-10-10 13:47:11",
      "seasonTeamsId": [
        "90fee157-5392-4e18-898e-cf37a7952b40"
      ]
    },
    {
      "title": "Aer aduro vereor cicuta clamo cultellus defetiscor tempus.",
      "content": "Conculco vester vos optio. Verto victus vix comitatus patruus vivo candidus vulpes desidero. Voluptatem et provident speciosus defessus trepide.Adnuo aveho vaco. Perferendis conor calamitas odit venia. Charisma aqua deludo vereor cimentarius cresco triumphus.Ducimus deludo tam adduco candidus veritas coruscus somniculosus. Verbera texo bene clam alioqui antea vergo summopere. Taceo ut vado vulgo omnis stillicidium contigo autus versus agnosco.",
      "draft": false,
      "postAt": "2024-10-10 07:45:26",
      "seasonTeamsId": [
        "aaf6fb50-b148-4a70-9bc7-ab5691d34e73"
      ],
      "id": "06aa0931-1e2d-449a-b5fa-84fdc2befdb0"
    },
    {
      "id": "bacb61c5-a208-4d61-8800-ba4d84901d2b",
      "title": "Adopto vinculum uter decretum conventus celer celer curvo.",
      "content": "Aurum clarus vaco conservo. Caelum adsuesco tantum vae impedit crur auxilium pax thorax. Tempore vacuus congregatio abduco cubicularis adficio thesis terra.Deinde tardus cohibeo ab et. Vaco adulatio tunc venia tergo. Coaegresco thesaurus nemo depono sapiente coruscus depopulo casso studio tredecim.Vitium adulescens decet uxor quaerat. Non magnam blandior coniecto suspendo aggredior talio basium arx decet. Unde credo quisquam deputo earum tamdiu concido venustas.",
      "draft": true,
      "postAt": "2024-10-10 15:27:55",
      "seasonTeamsId": [
        "3f71bf00-c992-46cc-a4da-ed176d8f97dd"
      ]
    },
    {
      "draft": true,
      "postAt": "2024-10-10 01:33:14",
      "seasonTeamsId": [
        "19aee0e1-7dcb-4c8a-addb-dd33899da82a"
      ],
      "id": "26d47b59-473d-485e-ac62-8b0d962e43df",
      "title": "Aranea cribro usque arx.",
      "content": "Aer clibanus statim ademptio. Cena crepusculum deporto stultus decumbo. Voveo eligendi cenaculum abeo curia cado ante.Virgo eum appono error absum video atrocitas vix. Sint vitae demulceo ut video vitiosus valde in esse. Aro compono cubicularis volva aptus odit praesentium arguo vorago.Sponte delicate comedo suscipio. Quam conduco iure aestus utroque. Cunae chirographum confido toties deorsum sursum succedo."
    },
    {
      "postAt": "2024-10-09 19:36:58",
      "seasonTeamsId": [
        "674e7859-3933-4a8f-95bf-98f0434b6e84"
      ],
      "id": "b5aa9e3d-d9ce-4cb9-bd1b-1f573315a61c",
      "title": "Causa architecto vulgus magni.",
      "content": "Texo vespillo amet comis torrens adhaero via utroque triumphus. Vinco cariosus patrocinor. Tunc tristis charisma provident cerno numquam adstringo.Adsum tabesco abstergo cur decor animadverto ager vereor. Nesciunt coma cilicium cornu clamo synagoga theatrum pax adfero. Antiquus colo validus substantia celo caries audeo apto bellum cribro.Utroque unus thalassinus alii argumentum conatus curvo audax suffragium. Ustulo ex ait suspendo ullam territo. Calcar capitulus admiratio ex tempore ante urbs tum deduco adflicto.",
      "draft": true
    },
    {
      "id": "42fef821-2ad2-449d-9640-c43c807a86c5",
      "title": "Verecundia sequi confugo torrens undique deripio.",
      "content": "Turbo somniculosus vicissitudo. Spiritus trucido ager cognomen atavus adinventitias beneficium voco. Advoco casso spero decimus thesaurus cauda cupio termes sursum.Error ventito absum. Trado nesciunt cotidie solvo terreo ante repellat amet copia. Desino substantia aegrus stabilis stips cui depopulo.Torqueo vilitas totidem accusamus doloribus. Confido uxor hic accusamus suspendo sol accommodo. Suffragium suus trucido solus.",
      "draft": true,
      "postAt": "2024-10-09 22:38:00",
      "seasonTeamsId": [
        "835695cf-86a3-4666-8c10-4cdfa4bc53a6"
      ]
    },
    {
      "postAt": "2024-10-10 03:18:42",
      "seasonTeamsId": [
        "f68714e5-f689-40c9-8b57-a762be3b8685"
      ],
      "id": "f2def1fa-3727-49f7-a871-ac934d7bb4fc",
      "title": "Aeternus defluo tactus corrupti demonstro.",
      "content": "Accusamus testimonium bellum commodo canto caries claudeo. Valeo sto villa una adiuvo. Temporibus adsum creptio ara.Adinventitias deporto nulla aliquid contabesco conventus textor. Delego vado inventore crepusculum. Optio cognatus adeptio clibanus uter.Attollo virtus vindico vinculum sufficio ventus adversus. Videlicet cattus deleniti aveho aspicio rerum carmen reiciendis atque paulatim. Aggredior aperio conculco aequitas cito ex turbo summisse contego audeo.",
      "draft": false
    },
    {
      "title": "Vestrum conventus incidunt absconditus adsidue solvo decerno copiose vesco.",
      "content": "Venustas adfero adversus victoria damno. Traho antea terminatio abutor amplus. Coniecto uredo deorsum aspernatur.Adulescens admoveo caput amaritudo. Conicio deludo aequitas. Pecus textilis tabula conspergo.Considero vesco nostrum. Iusto terminatio quas. Cattus turbo cenaculum attero conatus.",
      "draft": false,
      "postAt": "2024-10-09 20:26:46",
      "seasonTeamsId": [
        "a61f6bd1-4c89-4a2d-89e4-07b7dd37edc5"
      ],
      "id": "e7dbb38f-3097-43cb-a700-d9eca1b3fb04"
    },
    {
      "postAt": "2024-10-10 03:03:25",
      "seasonTeamsId": [
        "0559328e-5fe3-46dd-bc41-86835708e0e3"
      ],
      "id": "50b01917-f00c-4cd6-96e9-b956b95d119f",
      "title": "Constans termes explicabo sequi commemoro certus.",
      "content": "Terra adulescens iure amplexus tribuo volup acsi ipsa suppellex. Appono ubi cervus stipes utilis cena decumbo umbra dedico. Reiciendis denego sub volaticus tredecim nisi.Tabella sum assentator suscipit subiungo aegrus. Vociferor sortitus concedo sordeo teres molestias tam ara texo. Decor consequuntur asporto pariatur speculum curis.Consequatur alii audio commodi. Coma adstringo tolero. Tolero celo curto aer vorax viriliter vae addo.",
      "draft": false
    },
    {
      "id": "6d7e7ace-6431-4d2a-b8a6-6dafd13595e5",
      "title": "Aequus subseco adfectus.",
      "content": "Pauci demoror verbum utor conservo. Vitium arguo mollitia velum porro deprimo ager. Atqui comitatus voluptatum adulatio.Textilis vox ter consuasor sublime coniecto. Subvenio summopere urbs. Tabesco coniecto coaegresco deputo derelinquo.Admoneo cunabula turba custodia. Aro validus acquiro. Comprehendo adulatio statim quaerat aeger.",
      "draft": true,
      "postAt": "2024-10-10 15:25:07",
      "seasonTeamsId": [
        "90285977-2eb7-48f2-a947-870e4fa6b6ea"
      ]
    },
    {
      "id": "f74772a7-d2b9-4446-b152-7d4a54e6ce20",
      "title": "Cernuus tollo vir cunae.",
      "content": "Concedo venia coruscus tabgo dolorum suffoco talio. Condico ut curatio audentia nam amplus. Surculus patrocinor cervus utique defero cohibeo arca.Ullus casus deporto eos. Vero dedecor saepe. Turbo vaco ocer voro strenuus allatus appono temptatio ulterius antiquus.Minus adamo clementia colligo votum. Perferendis comis volubilis. Attero vulticulus teneo adsidue derelinquo utrimque pariatur vox.",
      "draft": true,
      "postAt": "2024-10-09 21:31:13",
      "seasonTeamsId": [
        "69306776-c05a-4c47-82c1-028f6c1b5ec4"
      ]
    },
    {
      "postAt": "2024-10-09 20:33:29",
      "seasonTeamsId": [
        "eb033c88-7b1d-44a3-b943-6ef5aaeda1d0"
      ],
      "id": "f4f31269-c824-4d94-867d-d79b6931cced",
      "title": "Aveho varietas tamquam auditor creo nisi eius.",
      "content": "Cruentus aequitas deporto. Canis soleo tabernus vergo cetera. Decet pecus suffoco.Clementia suscipio teneo acer amissio ara. Conicio crepusculum accusantium aliquid despecto apparatus audeo cometes. Acsi alioqui valeo demoror solitudo ad summisse decumbo.Aegre substantia aeger. Ater depraedor thermae derideo bardus. Amo arca tabesco ancilla unus auctor ascisco turbo cupressus.",
      "draft": true
    },
    {
      "id": "85453e25-e4ba-4d84-bc31-46b23a19cd84",
      "title": "Ultra triduana totus clementia arcus admitto acervus.",
      "content": "Vilicus comedo vox vigilo cursim veritatis in uredo. Villa volup cogo amplitudo vestrum impedit asporto. Vilis antea aeternus laborum tyrannus custodia quidem caste culpa.Qui coniecto currus libero. Voro tracto tollo arbitro volutabrum. Laudantium tenetur valetudo solum a degenero inflammatio stella.Defungo acer tamisium autem anser spoliatio deripio clarus animi. Amplitudo asper aggero collum ab peccatus considero. Summisse temperantia statua vigor antea summopere animi vilis vereor quaerat.",
      "draft": false,
      "postAt": "2024-10-10 12:45:21",
      "seasonTeamsId": [
        "71b2e03c-5380-4be2-91de-e973a9b2748c"
      ]
    }
  ],
  "users": [
    {
      "avatar": null,
      "blocked": false,
      "id": "494123cf-1859-479c-969a-4cbfa62972a1",
      "email": "Cecile_Weissnat42@yahoo.com",
      "name": "Arno_Sipes31",
      "role": "USER"
    },
    {
      "blocked": false,
      "id": "ac2d3b59-9557-4190-8219-844ff210ce03",
      "email": "Mauricio.Hane85@gmail.com",
      "name": "Constance_Cartwright82",
      "role": "USER",
      "avatar": null
    },
    {
      "id": "d8fc11d1-1edb-43c3-a21d-2d21c8cda407",
      "email": "Stevie.Bradtke@gmail.com",
      "name": "Easter_Rath84",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "email": "Arnold_Erdman8@yahoo.com",
      "name": "Emery_Flatley",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "713dda58-0615-40c9-9f61-9540bb72edee"
    },
    {
      "avatar": null,
      "blocked": false,
      "id": "ac8f8036-8248-47a1-a8ef-6e4f77b12313",
      "email": "Winston64@yahoo.com",
      "name": "Frances_Roberts",
      "role": "USER"
    },
    {
      "avatar": null,
      "blocked": false,
      "id": "b3e5797e-7ff7-47d8-82e1-486a642e2d3d",
      "email": "Nels.Goodwin33@hotmail.com",
      "name": "Leo_Moore57",
      "role": "USER"
    },
    {
      "id": "06101ae4-0f2c-4ff2-8515-1eeec8cdd4fb",
      "email": "Nia.Bernhard31@hotmail.com",
      "name": "Terrill_Rohan",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "id": "383b07c6-7cd5-4142-be27-02aaba9cc0bc",
      "email": "Isadore71@hotmail.com",
      "name": "Horacio16",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "blocked": false,
      "id": "a8f8f7d6-7003-4f17-bc99-156f3d272703",
      "email": "Noe.OReilly52@gmail.com",
      "name": "Ora_Buckridge",
      "role": "USER",
      "avatar": null
    },
    {
      "id": "16f58af7-3b70-4d23-acfe-9c486a464555",
      "email": "Jaunita.Jaskolski@hotmail.com",
      "name": "Bobby.Bosco",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "id": "08710d60-7351-42c2-ba44-3d02120cbe6c",
      "email": "Alexane_Dickinson@yahoo.com",
      "name": "Leanne.Shields32",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "avatar": null,
      "blocked": false,
      "id": "9d27818d-2a5c-4259-9a12-b0d883aebbde",
      "email": "Joana_Pouros@gmail.com",
      "name": "Aric0",
      "role": "USER"
    },
    {
      "avatar": null,
      "blocked": false,
      "id": "939e976b-cf44-440c-bde9-0a39e32c8c80",
      "email": "Lolita44@gmail.com",
      "name": "Curtis66",
      "role": "USER"
    },
    {
      "avatar": null,
      "blocked": false,
      "id": "994cc369-6e32-406e-ad9b-75c2feee56aa",
      "email": "Elbert_Greenholt60@yahoo.com",
      "name": "Uriah_Weber",
      "role": "USER"
    },
    {
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "1a0aa01a-722b-4b59-a6c5-6885cdc89e87",
      "email": "Eulah.Stamm6@yahoo.com",
      "name": "Jackeline.Kovacek77"
    },
    {
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "243cdd2f-b91d-4730-9035-ad631167859b",
      "email": "Ona.Parisian@yahoo.com",
      "name": "Rickey.Mosciski8"
    },
    {
      "email": "Ayden16@gmail.com",
      "name": "Alessia.Trantow9",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "3aabd82d-03e3-453d-9164-891efa196e97"
    },
    {
      "id": "c68a73b2-62d6-4c62-beed-6afcf6b60040",
      "email": "Hipolito80@yahoo.com",
      "name": "Allen.Schmidt",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "id": "bedf20d3-2745-402a-bed1-a0f0dcc95831",
      "email": "Samara.Bartoletti38@hotmail.com",
      "name": "Sonya_Klocko85",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "email": "Terrill.Grimes@hotmail.com",
      "name": "Euna.Brakus2",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "f3f28190-f8a5-4344-92aa-2e52c6de6a4d"
    },
    {
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "47375c2d-1932-4ebf-8e36-5ddc96838fe5",
      "email": "Mozelle.Funk-Koss25@hotmail.com",
      "name": "Johann70"
    },
    {
      "name": "Malvina_Bruen",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "db7b5cd0-f9b4-4e51-b7f5-bd9527eaab03",
      "email": "Jessica.Keeling@hotmail.com"
    },
    {
      "avatar": null,
      "blocked": false,
      "id": "71139932-2cc8-425c-93a4-2a61d66d5957",
      "email": "Ted7@gmail.com",
      "name": "Marlon_Fritsch98",
      "role": "USER"
    },
    {
      "id": "a99b5094-a0ba-476e-b3bd-a9fc5518b50a",
      "email": "Winifred8@yahoo.com",
      "name": "Toby.Kshlerin94",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "avatar": null,
      "blocked": false,
      "id": "0ca9c35d-a8f3-4521-b4f5-2f330511ce7c",
      "email": "Cristian.Fadel@hotmail.com",
      "name": "Kelvin_Parisian",
      "role": "USER"
    },
    {
      "id": "7aa9d6cf-fe37-4ccd-974b-1e6e8483b908",
      "email": "Kristian_Blanda37@yahoo.com",
      "name": "Darlene.Boehm80",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "id": "52997a5b-63fb-4403-8e89-fb4acf3a0d33",
      "email": "Isaiah_Hahn39@yahoo.com",
      "name": "Tavares98",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "id": "e6d9c3c5-7c67-4022-85ab-37225a33cedb",
      "email": "Johnathan31@gmail.com",
      "name": "Alyson.Marquardt-Auer",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "id": "0d15edf8-7eab-4ffc-8545-64c9a5a8ac38",
      "email": "Andrew_Doyle79@hotmail.com",
      "name": "Cleora_Mueller-Boyer",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "id": "79500479-75d0-4be4-9a2e-99cc4e1c028e",
      "email": "Rahul.Wunsch65@yahoo.com",
      "name": "Mckenna.Littel",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "name": "Dorothea_Quitzon46",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "44a022bd-2fce-4d2f-acc6-f9f90ef8584f",
      "email": "Anais.Stokes@yahoo.com"
    },
    {
      "id": "aea46c26-e564-4d7e-9919-4ccf3b947a84",
      "email": "Mathias_Walker39@hotmail.com",
      "name": "Orpha_Beahan",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "email": "Lucio_Schmidt@hotmail.com",
      "name": "Rafaela.Jenkins",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "90b63d76-9793-4618-82a1-e1afcec63884"
    },
    {
      "id": "ecd29c5d-bf1a-44d5-835e-c69a7f94d559",
      "email": "Vernie60@yahoo.com",
      "name": "Pearl.Koss42",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "blocked": false,
      "id": "7781e15f-15f8-45e8-9d65-c8d80f38f7e8",
      "email": "Ophelia.Toy85@yahoo.com",
      "name": "Howell_Raynor",
      "role": "USER",
      "avatar": null
    },
    {
      "id": "eac51043-6851-46cb-81b4-0533fd017c5b",
      "email": "Jarvis.Blick84@gmail.com",
      "name": "Angus_Heidenreich79",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "id": "a2a60d41-0edd-4d82-952b-074b8f8a476a",
      "email": "Pink58@hotmail.com",
      "name": "Vivian.Schmitt",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "id": "79c5b904-561a-4431-8585-56a798e4ddaa",
      "email": "Kameron_Farrell@hotmail.com",
      "name": "Myron.Willms",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "name": "Cassie.Rogahn71",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "03fd510e-cd9a-42b8-9527-060efe1f46a1",
      "email": "Alexandria.Hayes@yahoo.com"
    },
    {
      "blocked": false,
      "id": "1a5d4719-be99-475f-85b6-ff6a22c2664f",
      "email": "Hyman44@yahoo.com",
      "name": "Malcolm_Jakubowski",
      "role": "USER",
      "avatar": null
    },
    {
      "avatar": null,
      "blocked": false,
      "id": "0455155e-69b6-4201-a375-110ee4732928",
      "email": "Sabrina_Jaskolski@gmail.com",
      "name": "Michel_Olson",
      "role": "USER"
    },
    {
      "id": "27494082-999c-438b-9be7-1b47232b1561",
      "email": "Juliana6@gmail.com",
      "name": "Elwin_Spencer74",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "blocked": false,
      "id": "b39aeb17-064a-4bc3-8f45-be378126d064",
      "email": "Stan18@hotmail.com",
      "name": "Marjolaine.Mitchell58",
      "role": "USER",
      "avatar": null
    },
    {
      "id": "fe924cf9-98b0-4517-834c-9807b2db4e12",
      "email": "Bethany74@yahoo.com",
      "name": "Roslyn98",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "08a5774e-a021-4405-9ab2-b65929837a0b",
      "email": "Margarette.Runolfsson68@gmail.com",
      "name": "Gwen_Grimes82"
    },
    {
      "id": "85f46226-8a28-4eb5-9afb-77db3e377d27",
      "email": "Gennaro_Connelly@gmail.com",
      "name": "Andrew.Douglas",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "avatar": null,
      "blocked": false,
      "id": "233184a1-d2c9-4d7e-9397-e5465029de68",
      "email": "Camren.Upton-Green@hotmail.com",
      "name": "Salvador.Kerluke",
      "role": "USER"
    },
    {
      "id": "e10e3801-2e40-4e95-8dd6-6331e33622a2",
      "email": "Joshuah34@yahoo.com",
      "name": "Bertha_Spencer",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "email": "Mossie.Dietrich@yahoo.com",
      "name": "Darius_Bradtke45",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "0d43f1ab-b5c3-4149-8796-0f90d2deb257"
    },
    {
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "99087647-1339-4072-abc5-aca5f5122007",
      "email": "Emile.Kunze@hotmail.com",
      "name": "Joseph_West"
    },
    {
      "id": "91ab89c9-0c63-4e86-b8c8-83684a4f8977",
      "email": "Aniyah_Boyer74@yahoo.com",
      "name": "Percy14",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "email": "Agustina46@gmail.com",
      "name": "Rozella.Dicki12",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "72623a49-5dc2-4e65-bf66-b5950d571989"
    },
    {
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "9e4cc65d-7ef2-43e5-8925-05b758da7d8f",
      "email": "Celestino_Beer@hotmail.com",
      "name": "June.Abbott36"
    },
    {
      "avatar": null,
      "blocked": false,
      "id": "7b7ef2be-f30c-4db0-ab39-bbe9753539f9",
      "email": "Mustafa_Mertz82@yahoo.com",
      "name": "Skye.Maggio",
      "role": "USER"
    },
    {
      "avatar": null,
      "blocked": false,
      "id": "0080d296-14c1-44f4-bca2-71f9be54c840",
      "email": "Jedediah_Mayert@yahoo.com",
      "name": "Dashawn_Spencer",
      "role": "USER"
    },
    {
      "id": "c583f3ce-97b6-406f-92f1-d3fbfc952145",
      "email": "Garfield_Crona@gmail.com",
      "name": "Jarrett_Bernier",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "id": "1dbee728-565b-45f8-96b3-2d34299c842f",
      "email": "Mateo_Kassulke@yahoo.com",
      "name": "Darron42",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "name": "Sylvan_Casper",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "7b01be00-aeca-46f9-86db-9d1c81d3707e",
      "email": "Josephine.Johnston@gmail.com"
    },
    {
      "id": "47b4dd00-687f-4b23-8749-74addd9ee859",
      "email": "Akeem.Dooley13@hotmail.com",
      "name": "Andrew_Berge64",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "email": "Andrew.Kuvalis46@hotmail.com",
      "name": "Gabriel9",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "d3327f69-ffaa-4b02-a486-8e041e1e0d91"
    },
    {
      "id": "7e1310ca-008e-4810-9d79-2a9730d5a85e",
      "email": "Alba59@gmail.com",
      "name": "Salvador_Robel12",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "blocked": false,
      "id": "18b690cb-1a2a-458f-b55b-7c5f57a14ae4",
      "email": "Eugene.Ebert@gmail.com",
      "name": "Marion85",
      "role": "USER",
      "avatar": null
    },
    {
      "id": "bdcf3d5c-8117-4341-9467-bdf48fcc2a85",
      "email": "Kianna40@gmail.com",
      "name": "Winnifred.Bruen73",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "id": "9c8f50ab-cfcb-4272-9b98-50fdc5e07487",
      "email": "Aglae71@gmail.com",
      "name": "Dewitt7",
      "role": "USER",
      "avatar": null,
      "blocked": false
    },
    {
      "name": "Edgar_Kub",
      "role": "USER",
      "avatar": null,
      "blocked": false,
      "id": "7724da2a-53ff-4ef0-a7ab-a5dd85327643",
      "email": "Darlene_Bosco@gmail.com"
    }
  ],
  "rounds": [
    {
      "id": "6f65f95a-608d-4dcc-9b9e-eccc51355e2d",
      "number": 10,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "167440e2-8332-4bf6-9be2-15ac0e2cf72f"
    },
    {
      "id": "705f7f18-a675-4952-bee0-1003bec783a2",
      "number": 16,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "0af256e7-8019-4ba9-90a3-22525a91d115"
    },
    {
      "number": 30,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "c811e3a1-2617-4bd7-ae3e-a0d04923e1ed",
      "id": "e3e71da1-ff53-4553-8dd0-14c1066d4623"
    },
    {
      "number": 12,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "854c3752-e7d4-4b4e-9f3a-b214f5a1ce1c",
      "id": "3e5fac0a-3f60-444f-8e0d-5ef2bcfcd981"
    },
    {
      "id": "114e0fb4-7e91-4b71-b068-1bac3bdffe40",
      "number": 92,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "f4a84914-6e87-4948-b446-0745401c02e6"
    },
    {
      "number": 13,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-09",
      "seasonId": "63837a95-1fe0-4560-914c-73540c83cef3",
      "id": "753bf2aa-990a-4a0a-8a82-18f2dc9fa823"
    },
    {
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "abe39e7e-55aa-4730-8408-8c0a8309aa8d",
      "id": "de9b0542-693e-4b74-86ec-624bc2644e29",
      "number": 49
    },
    {
      "id": "47a7f7b4-7503-4adb-9282-539da234b98d",
      "number": 45,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-09",
      "seasonId": "68424211-e01a-4079-996c-006088aab6fd"
    },
    {
      "seasonId": "34cc474c-2cf3-4706-9f62-e07eb851febe",
      "id": "13a7179c-a3b6-4c16-8124-b0a4443b0fb4",
      "number": 17,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10"
    },
    {
      "id": "51ec15f7-9acf-4b2f-8b34-b13cbec984f0",
      "number": 19,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10",
      "seasonId": "211e51c8-23e0-41bf-9d74-059f9b719cc1"
    },
    {
      "id": "00de0129-d9ae-4608-a69f-9a2101c5aceb",
      "number": 80,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "7d273054-43c5-46cc-a81a-fb9358f537ed"
    },
    {
      "id": "ce1d43af-78d6-4f00-841a-86f007ee8aa7",
      "number": 43,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "1b7b3788-f812-4d71-bafa-67e37ab354da"
    },
    {
      "number": 70,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "5721ed51-d25e-400e-b845-0fef26ca60c1",
      "id": "463bbce3-297d-49d8-a564-4096f97dc9ce"
    },
    {
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "b8d4de60-f8e5-42a5-91c9-5f8fe7812583",
      "id": "09a38655-3964-435c-905f-4f08342bf26f",
      "number": 10
    },
    {
      "id": "70a94786-d30d-4174-82f8-97b6ecbf438c",
      "number": 50,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "3793bfbe-6c9c-4f56-81a7-e98387145efb"
    },
    {
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "b8ab79b7-8ec0-4254-b851-0c7b35cf95c0",
      "id": "5463a9b3-c1bc-4e49-a870-ee037223466e",
      "number": 42
    },
    {
      "id": "976341b6-9bb0-484d-9f84-d2ee95fd944c",
      "number": 54,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10",
      "seasonId": "3526aad4-f9b8-4b03-a3d6-715c33e4bf46"
    },
    {
      "id": "77bcb090-f945-4a89-b3d1-4237ac4508c1",
      "number": 20,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "d3cf8fc5-9a73-40dc-b568-e71699453a2e"
    },
    {
      "id": "fb05ef5b-5011-4a3c-8c01-16b19f1eb319",
      "number": 22,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "244f1638-d21e-4c39-9314-8f72e95ada6d"
    },
    {
      "id": "82d1d953-6bec-4750-a73e-2de96960581d",
      "number": 59,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-09",
      "seasonId": "3256a60d-c9d2-4e1b-8f3a-528d3df7532b"
    },
    {
      "id": "5edab335-4d56-4315-9077-f37deb06d8bc",
      "number": 5,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "40f0f7fb-b5ae-435f-82b3-a5f3097ae576"
    },
    {
      "id": "b7bbf0af-8416-4504-90e5-eb25d2cbcb5a",
      "number": 97,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-09",
      "seasonId": "2a24d559-69b6-489c-8672-fd6ffb139ae0"
    },
    {
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10",
      "seasonId": "6555e391-bc9b-4453-9dfa-b06503cf61f9",
      "id": "792660d0-c363-4148-a940-8e8350b664b3",
      "number": 18
    },
    {
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "5773700c-9f90-4940-9e94-7db1278d9f49",
      "id": "fae67397-4dc5-432b-be6c-a9767c14870d",
      "number": 93
    },
    {
      "id": "dab44140-80a9-4a34-820f-01c7276be983",
      "number": 36,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "87a9ea2d-fc01-4e7c-84e3-0cdc8c10fb74"
    },
    {
      "id": "4f7e1243-db37-4343-9441-111f1c2ea71d",
      "number": 25,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "c811e3a1-2617-4bd7-ae3e-a0d04923e1ed"
    },
    {
      "id": "8461b25a-ca79-4ad3-8d3c-43062c0fbfb7",
      "number": 29,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10",
      "seasonId": "d78b1a8e-4c3c-4a76-a09c-5ac2c9b94bdd"
    },
    {
      "seasonId": "8c4d9f85-2dd1-4b57-8170-47116f293a05",
      "id": "8920fede-21ff-4b0e-84ef-475a35674e23",
      "number": 90,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-09"
    },
    {
      "id": "0406f0dd-a4a6-4fd4-869a-f226776e87a1",
      "number": 57,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "0af256e7-8019-4ba9-90a3-22525a91d115"
    },
    {
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-09",
      "seasonId": "854c3752-e7d4-4b4e-9f3a-b214f5a1ce1c",
      "id": "bc3bc234-d0a9-4c4a-a471-30cecc77f546",
      "number": 73
    },
    {
      "number": 84,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "41ebdaa3-3bc9-42b8-80b5-fb848bf15935",
      "id": "fdfd3809-131d-4a01-bf77-9f466ae62a8e"
    },
    {
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-09",
      "seasonId": "5d7951dd-72eb-40f4-b6a7-761c9da30cfc",
      "id": "a570f1de-2c29-4351-83f0-90e351a35555",
      "number": 49
    },
    {
      "seasonId": "9e47376c-9149-42eb-b846-91fe29b68e91",
      "id": "30d7cd06-1b41-4cb5-8011-56e7a1f53168",
      "number": 36,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10"
    },
    {
      "id": "b979eb7e-fc31-4b30-a45e-a8d6055fcea1",
      "number": 7,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10",
      "seasonId": "8f8b1574-20a1-4227-8e86-2f4a5a385ed3"
    },
    {
      "standardEndDate": "2024-10-10",
      "seasonId": "508297b9-3c7b-483d-9011-fdd40d7cdefe",
      "id": "74ef3357-243f-4eba-bf68-ce804e9bbb54",
      "number": 52,
      "standardStartDate": "2024-10-10"
    },
    {
      "standardEndDate": "2024-10-09",
      "seasonId": "244f1638-d21e-4c39-9314-8f72e95ada6d",
      "id": "44266e69-3470-4a05-a5b9-2bd0ba7ba49f",
      "number": 94,
      "standardStartDate": "2024-10-10"
    },
    {
      "id": "eaf85226-7085-4ff1-b078-8531a7a7c385",
      "number": 37,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-09",
      "seasonId": "b006e55b-26cd-4c85-a035-50507dabe9d7"
    },
    {
      "standardEndDate": "2024-10-10",
      "seasonId": "34cc474c-2cf3-4706-9f62-e07eb851febe",
      "id": "57d5acce-8e6b-40be-8f52-ca9108ab5006",
      "number": 24,
      "standardStartDate": "2024-10-10"
    },
    {
      "standardEndDate": "2024-10-10",
      "seasonId": "9247fa5f-acdc-4d5c-9a88-3766818949ea",
      "id": "efd65823-761d-4d98-96f8-941eeb96a62d",
      "number": 86,
      "standardStartDate": "2024-10-10"
    },
    {
      "standardEndDate": "2024-10-09",
      "seasonId": "7d273054-43c5-46cc-a81a-fb9358f537ed",
      "id": "9f97f075-b137-4198-8607-b2cfbb3fc7ce",
      "number": 48,
      "standardStartDate": "2024-10-09"
    },
    {
      "id": "f3e7de26-4e30-4ac7-8b47-22694ee29570",
      "number": 60,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "9720254e-e81c-4d45-8d0e-db0daadf6eef"
    },
    {
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "6555e391-bc9b-4453-9dfa-b06503cf61f9",
      "id": "b94ba922-efe1-4095-979d-5220ba685458",
      "number": 70
    },
    {
      "seasonId": "6377f60d-6eaf-4413-9b51-a720c1812561",
      "id": "37f5b294-8035-4173-a649-e801cfc177bb",
      "number": 44,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10"
    },
    {
      "id": "a53d69a1-f353-49d4-b882-beedbc593974",
      "number": 86,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "86798899-1f49-483a-82c0-2bad509274e8"
    },
    {
      "id": "3cfc79d3-b7d5-4a22-a4b2-fdb96ab5f0ee",
      "number": 47,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10",
      "seasonId": "7c374673-46aa-4160-a96c-7e7639510430"
    },
    {
      "id": "c0e6d244-35e0-43a6-9ea6-8d6e92aa0008",
      "number": 20,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "2a24d559-69b6-489c-8672-fd6ffb139ae0"
    },
    {
      "number": 38,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10",
      "seasonId": "3fc4e248-ad73-4a57-9070-277c4f6c9c3d",
      "id": "ea07d67d-3b78-48fd-8916-9c629c49711f"
    },
    {
      "id": "7afa0ae0-2690-47a3-87f6-bc45da85093d",
      "number": 94,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-09",
      "seasonId": "ceb891fd-f7d4-468a-b1ff-d259c75cca20"
    },
    {
      "number": 85,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10",
      "seasonId": "194a8575-1c1c-46cf-9c61-c36199e54e16",
      "id": "23566003-da36-49a2-80f1-15af5b61c760"
    },
    {
      "id": "db8ba52a-74fa-4063-9d4d-5ba8cf75eac7",
      "number": 57,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "567d667c-07cd-420c-8b8a-e9362bc5436d"
    },
    {
      "id": "085d773c-2137-463e-8378-afd91844aec7",
      "number": 70,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "3526aad4-f9b8-4b03-a3d6-715c33e4bf46"
    },
    {
      "id": "dcc0f0fe-b7f9-471c-a260-d2eb6b5d1e17",
      "number": 22,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-09",
      "seasonId": "1d4e858a-48b5-4897-9b85-95a48f61ae59"
    },
    {
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "7364355d-f9f0-4e9f-9b1f-221b3bc1f879",
      "id": "c2fd3acd-2e74-4185-af42-517c8cc10559",
      "number": 77
    },
    {
      "id": "0a21e922-8124-4ddf-8841-fd0b0d3d82ee",
      "number": 92,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "5773700c-9f90-4940-9e94-7db1278d9f49"
    },
    {
      "id": "30a06cd1-e816-4d86-9aa2-e35677e4a8a7",
      "number": 99,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-09",
      "seasonId": "40d06100-6094-4fe8-bf2c-3a28118f5e7c"
    },
    {
      "id": "a1a36608-37a4-4130-96ab-e6f3a3c1105b",
      "number": 20,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-09",
      "seasonId": "a88a1fec-edb7-429f-836f-853db9674636"
    },
    {
      "standardEndDate": "2024-10-10",
      "seasonId": "63837a95-1fe0-4560-914c-73540c83cef3",
      "id": "04eea9f3-2ea9-4fa3-a76b-37ee7e84ab9c",
      "number": 32,
      "standardStartDate": "2024-10-10"
    },
    {
      "seasonId": "ea009f25-4fd4-4265-8481-9e4edeea3451",
      "id": "03855f15-8d7b-45df-9af8-3bb895a7ebd1",
      "number": 90,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10"
    },
    {
      "id": "4071d9a4-8279-4af2-8f63-2905b0afe5f5",
      "number": 52,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10",
      "seasonId": "abe39e7e-55aa-4730-8408-8c0a8309aa8d"
    },
    {
      "number": 50,
      "standardStartDate": "2024-10-09",
      "standardEndDate": "2024-10-10",
      "seasonId": "68424211-e01a-4079-996c-006088aab6fd",
      "id": "62433cf2-03f8-47b3-9ff6-c7867712efa9"
    },
    {
      "id": "f36c1a77-a3bd-44bb-927c-4ff49ba2d11d",
      "number": 48,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-10",
      "seasonId": "c3f70b3b-637d-46d6-9a30-bc93899c5392"
    },
    {
      "seasonId": "f4a84914-6e87-4948-b446-0745401c02e6",
      "id": "b3924500-7fef-4aed-beb0-6f6b30c46050",
      "number": 75,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-09"
    },
    {
      "id": "248606b2-3dcf-48c0-b056-a02da5b15e1f",
      "number": 7,
      "standardStartDate": "2024-10-10",
      "standardEndDate": "2024-10-09",
      "seasonId": "508297b9-3c7b-483d-9011-fdd40d7cdefe"
    }
  ],
  "games": [
    {
      "viewers": "95",
      "roundId": "6f65f95a-608d-4dcc-9b9e-eccc51355e2d",
      "id": "99f2427e-a80d-478a-9981-42c96c460f8d",
      "date": "2024-10-10 07:13:16",
      "stadium": "Stark, Schowalter and Gislason",
      "team2ScoreHalf": 3,
      "team2Score": 4,
      "result": "team_1",
      "seasonTeam1Id": "7bbd4fd4-18bc-43a5-a882-c1fa2dcf7606",
      "team1ScoreHalf": 6,
      "team1Score": 7,
      "annotation": "Claro cruciamentum provident eius nemo creator.",
      "seasonTeam2Id": null
    },
    {
      "team2Score": 10,
      "result": "team_2",
      "viewers": "556",
      "annotation": "Spero annus id repellendus tempus.",
      "seasonTeam2Id": null,
      "date": "2024-10-10 02:04:45",
      "team2ScoreHalf": 9,
      "team1Score": 9,
      "roundId": "e3e71da1-ff53-4553-8dd0-14c1066d4623",
      "seasonTeam1Id": "a9b8aebc-869e-4dc4-97ff-6a39f7c16118",
      "id": "dac177f7-cf47-419e-9dc0-0d5ecb980a30",
      "stadium": "Champlin, Upton and Schuster",
      "team1ScoreHalf": 8
    },
    {
      "team1Score": 2,
      "result": "team_2",
      "annotation": "Addo sit talus tracto.",
      "id": "e27b7bd3-2030-4101-a7fd-4e77f5cb0e5b",
      "date": "2024-10-10 18:14:20",
      "stadium": "Wuckert - Hoppe",
      "team1ScoreHalf": 1,
      "team2ScoreHalf": 7,
      "seasonTeam1Id": "578d6416-1b4d-438e-a259-168707ff446a",
      "seasonTeam2Id": null,
      "team2Score": 8,
      "viewers": "481",
      "roundId": "705f7f18-a675-4952-bee0-1003bec783a2"
    },
    {
      "team2ScoreHalf": 7,
      "team2Score": 8,
      "result": "draw",
      "seasonTeam1Id": "a1a2cf61-d27e-40ed-af9f-ac1baf0e6d7a",
      "seasonTeam2Id": null,
      "roundId": "3e5fac0a-3f60-444f-8e0d-5ef2bcfcd981",
      "id": "219761f2-7102-4b81-9841-89ff64945d0a",
      "date": "2024-10-10 00:38:47",
      "stadium": "Rogahn LLC",
      "team1ScoreHalf": 7,
      "team1Score": 8,
      "viewers": "25",
      "annotation": "Asporto cura blandior inventore vociferor venia basium."
    },
    {
      "seasonTeam2Id": null,
      "stadium": "Kassulke - Carter",
      "team1ScoreHalf": 8,
      "team2ScoreHalf": 3,
      "team2Score": 4,
      "result": "team_1",
      "viewers": "220",
      "annotation": "Adicio ubi dolorem corpus soluta quas cena tres repudiandae spoliatio.",
      "roundId": "753bf2aa-990a-4a0a-8a82-18f2dc9fa823",
      "id": "a80b6bb9-9685-46ad-b279-d9d64ebb0bf8",
      "date": "2024-10-09 23:44:40",
      "team1Score": 9,
      "seasonTeam1Id": "f68714e5-f689-40c9-8b57-a762be3b8685"
    },
    {
      "seasonTeam1Id": "90285977-2eb7-48f2-a947-870e4fa6b6ea",
      "id": "a812d5c0-605f-452f-822a-5484e0b604c1",
      "team2Score": 5,
      "viewers": "580",
      "annotation": "Vae decipio earum.",
      "roundId": "47a7f7b4-7503-4adb-9282-539da234b98d",
      "result": "team_1",
      "seasonTeam2Id": null,
      "date": "2024-10-10 10:04:26",
      "stadium": "Kessler and Sons",
      "team1ScoreHalf": 6,
      "team2ScoreHalf": 4,
      "team1Score": 7
    },
    {
      "team2ScoreHalf": 3,
      "result": "team_2",
      "viewers": "177",
      "roundId": "de9b0542-693e-4b74-86ec-624bc2644e29",
      "id": "8514946d-01b1-46dd-8a19-66758cb1b43d",
      "date": "2024-10-10 00:44:04",
      "stadium": "Torp - Bins",
      "team1ScoreHalf": 1,
      "seasonTeam1Id": "0559328e-5fe3-46dd-bc41-86835708e0e3",
      "team1Score": 2,
      "team2Score": 4,
      "annotation": "Eligendi sapiente tergum crinis comparo tollo trans capio.",
      "seasonTeam2Id": null
    },
    {
      "roundId": "114e0fb4-7e91-4b71-b068-1bac3bdffe40",
      "seasonTeam1Id": "00f118f7-3cf1-41ad-b4b9-195c53dc9f87",
      "id": "2da3a63f-8a95-4237-a39e-d248a9dfbb43",
      "team1ScoreHalf": 4,
      "team2ScoreHalf": 4,
      "team2Score": 5,
      "annotation": "Acer adaugeo varius.",
      "seasonTeam2Id": null,
      "date": "2024-10-10 05:00:59",
      "stadium": "Boyer, Moore and Glover",
      "team1Score": 5,
      "result": "draw",
      "viewers": "305"
    },
    {
      "roundId": "13a7179c-a3b6-4c16-8124-b0a4443b0fb4",
      "id": "c601ea7e-e100-41bc-890f-927f02fa21ec",
      "team1ScoreHalf": 1,
      "team2ScoreHalf": 4,
      "team1Score": 2,
      "viewers": "362",
      "seasonTeam1Id": "6e6786d3-a858-42dc-b48e-12797e8a900d",
      "seasonTeam2Id": null,
      "date": "2024-10-10 10:49:58",
      "stadium": "Rohan and Sons",
      "team2Score": 5,
      "result": "team_2",
      "annotation": "Defero excepturi collum aeger deficio."
    },
    {
      "team2ScoreHalf": 3,
      "team2Score": 4,
      "result": "team_1",
      "viewers": "883",
      "roundId": "51ec15f7-9acf-4b2f-8b34-b13cbec984f0",
      "id": "2c4358a6-6680-4549-ab97-c9f9437db0b3",
      "date": "2024-10-10 08:55:42",
      "team1Score": 9,
      "annotation": "Aeternus civis adstringo baiulus approbo ambulo tutamen venia ipsum.",
      "seasonTeam1Id": "30c97299-ed31-4686-a6b6-f8baefb4773c",
      "seasonTeam2Id": null,
      "stadium": "Boyle Inc",
      "team1ScoreHalf": 8
    },
    {
      "seasonTeam2Id": null,
      "date": "2024-10-10 07:33:35",
      "stadium": "Emmerich - Volkman",
      "team1Score": 8,
      "team2Score": 9,
      "result": "team_2",
      "viewers": "374",
      "id": "65957e90-06ea-4d2c-9ae0-27ae7db731f0",
      "team1ScoreHalf": 7,
      "team2ScoreHalf": 8,
      "annotation": "Aedificium auctus triduana comburo.",
      "roundId": "00de0129-d9ae-4608-a69f-9a2101c5aceb",
      "seasonTeam1Id": "1ed19cad-e182-43c3-937e-5a2024cbd5e2"
    },
    {
      "stadium": "Kemmer - Langosh",
      "team1ScoreHalf": 6,
      "team2ScoreHalf": 0,
      "team1Score": 7,
      "team2Score": 1,
      "result": "team_1",
      "seasonTeam1Id": "9f085048-b876-4e65-b1ec-67f1c1b42965",
      "date": "2024-10-10 03:28:59",
      "seasonTeam2Id": null,
      "viewers": "137",
      "annotation": "Verecundia altus quos bos usitas.",
      "roundId": "ce1d43af-78d6-4f00-841a-86f007ee8aa7",
      "id": "a7dd2731-81ee-46ca-b831-b99ca09976da"
    },
    {
      "viewers": "795",
      "seasonTeam1Id": "b2b35f41-eb65-467e-8a0f-c43449efaf59",
      "seasonTeam2Id": null,
      "stadium": "Wisoky - Von",
      "team2ScoreHalf": 9,
      "team2Score": 10,
      "team1Score": 3,
      "result": "team_2",
      "annotation": "Nulla adversus careo cunctatio depromo amissio.",
      "roundId": "09a38655-3964-435c-905f-4f08342bf26f",
      "id": "d97ad885-cf5c-4cc7-927d-5fe1e8a7da83",
      "date": "2024-10-10 07:10:33",
      "team1ScoreHalf": 2
    },
    {
      "team1ScoreHalf": 3,
      "team2ScoreHalf": 9,
      "team1Score": 4,
      "team2Score": 10,
      "result": "team_2",
      "viewers": "68",
      "annotation": "Vitium congregatio deficio fugit tripudio.",
      "date": "2024-10-10 11:58:36",
      "seasonTeam1Id": "391b85b2-4c59-43c4-b3cf-9ba303006475",
      "seasonTeam2Id": null,
      "roundId": "463bbce3-297d-49d8-a564-4096f97dc9ce",
      "stadium": "Gottlieb, Kuhn and Cartwright",
      "id": "93df1476-ea2f-45a3-8fbe-383706fcea36"
    },
    {
      "team2Score": 3,
      "seasonTeam1Id": "106213e7-e747-4927-815c-fcc7ec4bfdcf",
      "seasonTeam2Id": null,
      "date": "2024-10-09 23:14:10",
      "team2ScoreHalf": 2,
      "team1ScoreHalf": 9,
      "team1Score": 10,
      "result": "team_1",
      "viewers": "604",
      "annotation": "Calculus trans quas coerceo advoco.",
      "roundId": "70a94786-d30d-4174-82f8-97b6ecbf438c",
      "id": "871cd5ac-f392-40c2-aa33-175be9180e2d",
      "stadium": "Kautzer Inc"
    },
    {
      "result": "team_2",
      "viewers": "849",
      "annotation": "Accusator summopere super amoveo carpo.",
      "roundId": "77bcb090-f945-4a89-b3d1-4237ac4508c1",
      "seasonTeam1Id": "34891f2e-fd79-4346-bc01-9c8cf813ad23",
      "id": "f126766b-7bc8-48f2-b3f1-d4da3c9efe6e",
      "team1ScoreHalf": 3,
      "team2ScoreHalf": 4,
      "team1Score": 4,
      "team2Score": 5,
      "seasonTeam2Id": null,
      "date": "2024-10-10 11:14:49",
      "stadium": "Pfeffer, O'Reilly and Auer"
    },
    {
      "id": "72d8f94a-497d-42fa-944a-3186291f4de3",
      "date": "2024-10-10 16:50:37",
      "team1Score": 9,
      "team2Score": 9,
      "result": "draw",
      "annotation": "Torqueo comedo auctor ullus asporto totus auctus cognomen valeo acerbitas.",
      "roundId": "976341b6-9bb0-484d-9f84-d2ee95fd944c",
      "seasonTeam1Id": "4894b9ac-927d-4d56-87e7-c1e5b4b87894",
      "stadium": "Greenholt, Goldner and DuBuque",
      "team1ScoreHalf": 8,
      "team2ScoreHalf": 8,
      "viewers": "140",
      "seasonTeam2Id": null
    },
    {
      "team1ScoreHalf": 1,
      "team2ScoreHalf": 8,
      "result": "team_2",
      "annotation": "Derideo enim suffoco admoveo.",
      "roundId": "5463a9b3-c1bc-4e49-a870-ee037223466e",
      "seasonTeam1Id": "90fee157-5392-4e18-898e-cf37a7952b40",
      "seasonTeam2Id": null,
      "date": "2024-10-10 04:58:47",
      "stadium": "Nolan, Witting and Okuneva",
      "team1Score": 2,
      "team2Score": 9,
      "viewers": "911",
      "id": "44228835-b223-4cdc-ac27-9a392fc1ef38"
    },
    {
      "stadium": "Mante, Schimmel and Will",
      "team1Score": 8,
      "result": "team_2",
      "annotation": "Commodo reiciendis uterque tubineus voveo tergum abeo.",
      "seasonTeam2Id": null,
      "seasonTeam1Id": null,
      "id": "44ff1280-6dcb-4e78-90c2-91c7374e889c",
      "date": "2024-10-10 11:13:54",
      "team1ScoreHalf": 7,
      "team2ScoreHalf": 8,
      "team2Score": 9,
      "viewers": "346",
      "roundId": "82d1d953-6bec-4750-a73e-2de96960581d"
    },
    {
      "team2ScoreHalf": 3,
      "team1Score": 8,
      "result": "team_1",
      "seasonTeam1Id": "9960455e-e508-4e5c-9727-9901893e40a1",
      "seasonTeam2Id": null,
      "id": "fe732954-3eb9-4e98-bd80-881fb5b28aad",
      "stadium": "Upton LLC",
      "team1ScoreHalf": 7,
      "team2Score": 4,
      "viewers": "401",
      "annotation": "Decipio clarus suffoco trepide vero.",
      "roundId": "5edab335-4d56-4315-9077-f37deb06d8bc",
      "date": "2024-10-09 22:36:40"
    },
    {
      "team1Score": 9,
      "viewers": "470",
      "id": "25b47f47-27a8-4789-b306-9c2fc64c035e",
      "team2ScoreHalf": 7,
      "team1ScoreHalf": 8,
      "team2Score": 8,
      "result": "team_1",
      "annotation": "Comparo nobis coniuratio fugiat corrigo vulgivagus veniam trans terreo ademptio.",
      "roundId": "b7bbf0af-8416-4504-90e5-eb25d2cbcb5a",
      "seasonTeam1Id": "632e2680-f496-4d3f-ac95-19a447dad2b3",
      "date": "2024-10-10 14:13:18",
      "stadium": "Bashirian - Hettinger",
      "seasonTeam2Id": null
    },
    {
      "team2ScoreHalf": 5,
      "team1Score": 5,
      "result": "team_2",
      "viewers": "756",
      "seasonTeam1Id": "5d9a43e5-6c78-4f3b-aa33-adf5f33b6843",
      "seasonTeam2Id": null,
      "id": "2196c000-f5e5-4ea7-b8a9-65cb01441d61",
      "date": "2024-10-09 23:59:25",
      "team2Score": 6,
      "annotation": "Tumultus velociter occaecati itaque celebrer.",
      "roundId": "fae67397-4dc5-432b-be6c-a9767c14870d",
      "stadium": "Bahringer, Connelly and Ritchie",
      "team1ScoreHalf": 4
    },
    {
      "result": "team_1",
      "annotation": "Enim currus vigilo alo timidus atrox creo tolero.",
      "date": "2024-10-09 21:39:28",
      "team2ScoreHalf": 0,
      "team1ScoreHalf": 4,
      "team1Score": 5,
      "team2Score": 1,
      "viewers": "363",
      "roundId": "e3e71da1-ff53-4553-8dd0-14c1066d4623",
      "seasonTeam1Id": "a9b8aebc-869e-4dc4-97ff-6a39f7c16118",
      "id": "a4e70ce2-591c-40f2-bcd8-05f754fea630",
      "stadium": "Dickinson, Johns and Will",
      "seasonTeam2Id": "16f78128-73e1-48cd-9d02-e5d9b03279d3"
    },
    {
      "team2Score": 1,
      "viewers": "825",
      "roundId": "dab44140-80a9-4a34-820f-01c7276be983",
      "seasonTeam1Id": "f5b60ce8-7e14-492b-816d-c86711aeed8d",
      "id": "c2a0bcbf-14ea-490e-94de-3a087f6547bc",
      "team1Score": 2,
      "team1ScoreHalf": 1,
      "team2ScoreHalf": 0,
      "result": "team_1",
      "annotation": "Voluptas thalassinus vigilo adfectus.",
      "seasonTeam2Id": null,
      "date": "2024-10-10 09:42:52",
      "stadium": "Hickle Inc"
    },
    {
      "seasonTeam1Id": null,
      "team2ScoreHalf": 7,
      "team2Score": 8,
      "result": "draw",
      "annotation": "Bonus astrum avaritia validus vulgivagus collum deprimo.",
      "team1Score": 8,
      "viewers": "996",
      "roundId": "8461b25a-ca79-4ad3-8d3c-43062c0fbfb7",
      "seasonTeam2Id": null,
      "id": "80950cdc-7169-433b-9c2a-6537ad2c036b",
      "date": "2024-10-10 17:46:45",
      "stadium": "Kilback LLC",
      "team1ScoreHalf": 7
    },
    {
      "date": "2024-10-09 21:05:12",
      "stadium": "Rippin, Aufderhar and Okuneva",
      "team2Score": 4,
      "annotation": "Cumque agnosco summa ambitus vinum alioqui harum vitium comprehendo cornu.",
      "seasonTeam1Id": "303d552e-8066-4a47-b388-47f1e3657283",
      "viewers": "129",
      "roundId": "8920fede-21ff-4b0e-84ef-475a35674e23",
      "seasonTeam2Id": null,
      "id": "8f200a5a-66de-4073-a226-f2c054cc8f8d",
      "team1ScoreHalf": 5,
      "team2ScoreHalf": 3,
      "team1Score": 6,
      "result": "team_1"
    },
    {
      "roundId": "bc3bc234-d0a9-4c4a-a471-30cecc77f546",
      "seasonTeam1Id": "a1a2cf61-d27e-40ed-af9f-ac1baf0e6d7a",
      "id": "307d40bd-17ec-4f7d-981c-74895cba4f17",
      "stadium": "Walsh, Mohr and Beer",
      "team2ScoreHalf": 7,
      "team2Score": 8,
      "result": "team_1",
      "annotation": "Bestia sustineo vinitor vergo advoco facilis.",
      "seasonTeam2Id": null,
      "date": "2024-10-10 09:27:02",
      "team1ScoreHalf": 8,
      "team1Score": 9,
      "viewers": "744"
    },
    {
      "stadium": "Herzog - Stamm",
      "team2ScoreHalf": 5,
      "viewers": "183",
      "annotation": "Magnam patior bardus teres denuo voluntarius distinctio arma.",
      "seasonTeam2Id": "53f2f735-f190-4df0-a01c-bbff1c8a1d32",
      "result": "team_2",
      "roundId": "de9b0542-693e-4b74-86ec-624bc2644e29",
      "seasonTeam1Id": "0559328e-5fe3-46dd-bc41-86835708e0e3",
      "id": "78ac638e-f4aa-4a24-b74a-5cf1ea738614",
      "date": "2024-10-09 19:41:12",
      "team1ScoreHalf": 1,
      "team1Score": 2,
      "team2Score": 6
    },
    {
      "result": "team_1",
      "annotation": "Triduana verumtamen repellat victus ventus deorsum caelum auctor.",
      "seasonTeam2Id": null,
      "id": "1eeda0e8-35ae-41b9-80ff-3f1ce3079dfb",
      "date": "2024-10-09 21:56:03",
      "team1Score": 3,
      "team2Score": 2,
      "roundId": "b979eb7e-fc31-4b30-a45e-a8d6055fcea1",
      "seasonTeam1Id": null,
      "stadium": "Feeney Inc",
      "team1ScoreHalf": 2,
      "team2ScoreHalf": 1,
      "viewers": "470"
    },
    {
      "id": "015e1b77-fb11-4d39-879b-ab0d0ffb1c18",
      "stadium": "Ruecker Inc",
      "team1ScoreHalf": 9,
      "team1Score": 10,
      "annotation": "Thorax casso curo.",
      "seasonTeam1Id": "f24e5678-92e2-4b9b-92c0-bd81e1f5bf1a",
      "seasonTeam2Id": null,
      "date": "2024-10-09 21:27:06",
      "team2ScoreHalf": 3,
      "team2Score": 4,
      "result": "team_1",
      "viewers": "862",
      "roundId": "a570f1de-2c29-4351-83f0-90e351a35555"
    },
    {
      "team1ScoreHalf": 2,
      "team2ScoreHalf": 2,
      "team1Score": 3,
      "seasonTeam1Id": "69306776-c05a-4c47-82c1-028f6c1b5ec4",
      "seasonTeam2Id": null,
      "annotation": "Valetudo pauper iusto vacuus umerus neque coma utroque.",
      "roundId": "74ef3357-243f-4eba-bf68-ce804e9bbb54",
      "id": "e2a3382f-42a8-4cf4-bf1e-17f0733ca889",
      "date": "2024-10-10 06:14:12",
      "stadium": "Leffler Group",
      "team2Score": 3,
      "result": "draw",
      "viewers": "276"
    },
    {
      "seasonTeam1Id": null,
      "seasonTeam2Id": null,
      "id": "055aa856-0765-4ec1-a926-2332aa953955",
      "stadium": "Hermann Inc",
      "result": "team_1",
      "annotation": "Spero amicitia somnus.",
      "roundId": "efd65823-761d-4d98-96f8-941eeb96a62d",
      "viewers": "532",
      "date": "2024-10-10 09:44:07",
      "team1ScoreHalf": 4,
      "team2ScoreHalf": 1,
      "team1Score": 5,
      "team2Score": 2
    },
    {
      "annotation": "Damnatio talus timidus cicuta suggero adsidue cilicium ambulo ter iusto.",
      "seasonTeam1Id": "30c97299-ed31-4686-a6b6-f8baefb4773c",
      "seasonTeam2Id": null,
      "id": "4353c589-97cc-43c5-b042-9a85147f15e9",
      "team1Score": 4,
      "viewers": "894",
      "team2ScoreHalf": 1,
      "team2Score": 2,
      "result": "team_1",
      "roundId": "51ec15f7-9acf-4b2f-8b34-b13cbec984f0",
      "date": "2024-10-10 16:08:17",
      "stadium": "Rutherford and Sons",
      "team1ScoreHalf": 3
    },
    {
      "team1Score": 2,
      "team2Score": 3,
      "viewers": "104",
      "roundId": "13a7179c-a3b6-4c16-8124-b0a4443b0fb4",
      "seasonTeam1Id": "6e6786d3-a858-42dc-b48e-12797e8a900d",
      "date": "2024-10-10 16:31:07",
      "team2ScoreHalf": 2,
      "team1ScoreHalf": 1,
      "result": "team_2",
      "annotation": "Cruciamentum adicio vesper vir creta nam caries.",
      "seasonTeam2Id": null,
      "id": "37debc94-9d97-406f-8c4e-eb3d62104d4d",
      "stadium": "Dibbert - Cremin"
    },
    {
      "seasonTeam2Id": null,
      "stadium": "Breitenberg and Sons",
      "team2ScoreHalf": 4,
      "result": "team_1",
      "viewers": "468",
      "annotation": "Tubineus demo ipsum.",
      "roundId": "f3e7de26-4e30-4ac7-8b47-22694ee29570",
      "seasonTeam1Id": null,
      "id": "bc0c1609-956c-4839-a45f-236713fb4a8b",
      "date": "2024-10-10 05:52:13",
      "team1ScoreHalf": 6,
      "team1Score": 7,
      "team2Score": 5
    },
    {
      "team1ScoreHalf": 7,
      "team1Score": 8,
      "result": "team_1",
      "viewers": "502",
      "roundId": "37f5b294-8035-4173-a649-e801cfc177bb",
      "seasonTeam1Id": null,
      "seasonTeam2Id": null,
      "date": "2024-10-10 11:57:09",
      "stadium": "Shields - Lang",
      "team2ScoreHalf": 4,
      "team2Score": 5,
      "annotation": "Balbus contabesco at caveo eius decipio cursim textor cerno turpis.",
      "id": "ae7bcb75-8fb3-4072-b586-dfc32e0476d7"
    },
    {
      "id": "38780260-a610-469b-bc59-691b52b29541",
      "date": "2024-10-10 09:04:04",
      "stadium": "Paucek and Sons",
      "team1ScoreHalf": 1,
      "team1Score": 2,
      "roundId": "9f97f075-b137-4198-8607-b2cfbb3fc7ce",
      "seasonTeam1Id": "1ed19cad-e182-43c3-937e-5a2024cbd5e2",
      "team2ScoreHalf": 9,
      "team2Score": 10,
      "result": "team_2",
      "viewers": "673",
      "annotation": "Sonitus administratio alius.",
      "seasonTeam2Id": "e2ac97e5-74fd-45ee-9d29-680e6ed15383"
    },
    {
      "team1Score": 7,
      "viewers": "637",
      "roundId": "792660d0-c363-4148-a940-8e8350b664b3",
      "date": "2024-10-10 01:50:30",
      "team2ScoreHalf": 5,
      "team1ScoreHalf": 6,
      "team2Score": 6,
      "result": "team_1",
      "annotation": "Condico vesper uxor suffragium auctus subvenio curis surgo tantum.",
      "seasonTeam1Id": "33f6a5a3-0868-4824-81e8-a7043c782973",
      "seasonTeam2Id": "71e33242-7f9b-4e40-ba6a-fe0737aea446",
      "id": "215a8f75-9f72-4929-9233-8348142f5e5d",
      "stadium": "Franey LLC"
    },
    {
      "id": "3736c913-97cd-4ea3-8456-f4b325498b1a",
      "date": "2024-10-10 18:57:03",
      "team1ScoreHalf": 0,
      "team2Score": 10,
      "viewers": "622",
      "annotation": "Venio eligendi tabgo contabesco solium aer.",
      "seasonTeam2Id": null,
      "stadium": "Beer LLC",
      "team2ScoreHalf": 9,
      "team1Score": 1,
      "result": "team_2",
      "roundId": "463bbce3-297d-49d8-a564-4096f97dc9ce",
      "seasonTeam1Id": "391b85b2-4c59-43c4-b3cf-9ba303006475"
    },
    {
      "team1Score": 3,
      "result": "team_1",
      "viewers": "27",
      "annotation": "Quasi delectatio commemoro veritatis.",
      "roundId": "a53d69a1-f353-49d4-b882-beedbc593974",
      "id": "556e8eed-abf0-46ae-945a-fe38b649b7c0",
      "stadium": "Jacobson - Kshlerin",
      "team2ScoreHalf": 1,
      "seasonTeam1Id": "25232f33-2372-4ab8-abaf-c1c782bca176",
      "seasonTeam2Id": null,
      "date": "2024-10-10 18:46:19",
      "team1ScoreHalf": 2,
      "team2Score": 2
    },
    {
      "team1ScoreHalf": 8,
      "team2ScoreHalf": 9,
      "annotation": "Colligo ubi argentum solitudo cauda.",
      "seasonTeam1Id": "ff42a2dc-28b7-4942-968a-9e881482f087",
      "id": "94d6df9f-fc8d-4259-bc0e-7a85f8f3a91e",
      "date": "2024-10-09 22:33:43",
      "stadium": "Prosacco, Schmidt and Cartwright",
      "viewers": "280",
      "roundId": "3cfc79d3-b7d5-4a22-a4b2-fdb96ab5f0ee",
      "seasonTeam2Id": null,
      "team1Score": 9,
      "team2Score": 10,
      "result": "team_2"
    },
    {
      "roundId": "c0e6d244-35e0-43a6-9ea6-8d6e92aa0008",
      "id": "3cf84a19-fd13-49a8-a286-dbcd65a04a3f",
      "stadium": "Reichel, Koss and Champlin",
      "team1ScoreHalf": 7,
      "team1Score": 8,
      "team2Score": 4,
      "viewers": "463",
      "annotation": "Laboriosam valetudo atrox decumbo tam vesper uredo expedita exercitationem.",
      "seasonTeam2Id": "ce3ef6df-8cb7-4367-a20f-72f076caf22a",
      "date": "2024-10-10 07:49:28",
      "team2ScoreHalf": 3,
      "result": "team_1",
      "seasonTeam1Id": "632e2680-f496-4d3f-ac95-19a447dad2b3"
    },
    {
      "id": "29187e98-a0d8-42ad-9ab6-0b82dd15032f",
      "date": "2024-10-10 11:07:45",
      "stadium": "Johns and Sons",
      "team1ScoreHalf": 0,
      "team2ScoreHalf": 0,
      "team2Score": 1,
      "roundId": "77bcb090-f945-4a89-b3d1-4237ac4508c1",
      "team1Score": 1,
      "result": "draw",
      "viewers": "15",
      "annotation": "Curia crustulum theca solvo civis suggero.",
      "seasonTeam1Id": "34891f2e-fd79-4346-bc01-9c8cf813ad23",
      "seasonTeam2Id": null
    },
    {
      "annotation": "Arto calco absconditus volup acer aspernatur vel.",
      "roundId": "7afa0ae0-2690-47a3-87f6-bc45da85093d",
      "seasonTeam2Id": null,
      "id": "925896c8-4e8b-491d-9854-a503f8e63089",
      "date": "2024-10-10 14:28:02",
      "team2ScoreHalf": 9,
      "team2Score": 10,
      "viewers": "597",
      "seasonTeam1Id": null,
      "stadium": "Runolfsson - Abshire",
      "team1ScoreHalf": 1,
      "team1Score": 2,
      "result": "team_2"
    },
    {
      "stadium": "Bergstrom - Krajcik",
      "team2Score": 7,
      "result": "team_2",
      "seasonTeam1Id": "7bbd4fd4-18bc-43a5-a882-c1fa2dcf7606",
      "id": "276f74d1-19e8-4fda-b782-da0af85b746d",
      "date": "2024-10-10 10:56:55",
      "team1ScoreHalf": 3,
      "team2ScoreHalf": 6,
      "team1Score": 4,
      "viewers": "542",
      "annotation": "Aetas adamo agnosco aestas spiritus recusandae qui.",
      "roundId": "6f65f95a-608d-4dcc-9b9e-eccc51355e2d",
      "seasonTeam2Id": "9e1acfd2-b743-43f7-a8f6-0ea8e0f94f4e"
    },
    {
      "date": "2024-10-10 14:49:59",
      "team2Score": 5,
      "viewers": "597",
      "roundId": "23566003-da36-49a2-80f1-15af5b61c760",
      "annotation": "Suscipio trans somnus adulatio.",
      "seasonTeam1Id": null,
      "id": "89cb1f48-9214-4aaa-a11d-dd72f2c9202b",
      "stadium": "Littel, Toy and Deckow",
      "team1ScoreHalf": 0,
      "team2ScoreHalf": 4,
      "team1Score": 1,
      "result": "team_2",
      "seasonTeam2Id": null
    },
    {
      "team2ScoreHalf": 7,
      "team2Score": 8,
      "result": "team_1",
      "id": "d6acd16a-0e46-4cb8-a086-8c3d70b318b6",
      "date": "2024-10-09 23:33:56",
      "team1Score": 9,
      "viewers": "202",
      "annotation": "Tenetur beneficium totam quod.",
      "roundId": "5463a9b3-c1bc-4e49-a870-ee037223466e",
      "seasonTeam1Id": "90fee157-5392-4e18-898e-cf37a7952b40",
      "seasonTeam2Id": null,
      "stadium": "Smitham, Dickens and Konopelski",
      "team1ScoreHalf": 8
    },
    {
      "date": "2024-10-10 13:02:55",
      "stadium": "Beier - Mayer",
      "team1Score": 4,
      "result": "team_2",
      "seasonTeam1Id": "4894b9ac-927d-4d56-87e7-c1e5b4b87894",
      "id": "b33efe3b-4447-4fcb-b351-0a6b82a8b7d9",
      "team1ScoreHalf": 3,
      "team2ScoreHalf": 5,
      "team2Score": 6,
      "viewers": "34",
      "annotation": "Traho videlicet clamo.",
      "roundId": "085d773c-2137-463e-8378-afd91844aec7",
      "seasonTeam2Id": "710f7f98-440c-4a2c-8702-3e4631958efc"
    },
    {
      "team2Score": 1,
      "annotation": "Doloremque auctus arbitro commodo aduro umquam creptio cervus confero.",
      "roundId": "705f7f18-a675-4952-bee0-1003bec783a2",
      "seasonTeam1Id": "578d6416-1b4d-438e-a259-168707ff446a",
      "stadium": "Lang, Purdy and Reichert",
      "team1ScoreHalf": 2,
      "team2ScoreHalf": 0,
      "team1Score": 3,
      "result": "team_1",
      "viewers": "971",
      "seasonTeam2Id": null,
      "id": "dc03f782-7395-4029-9e8c-1c47f0d223df",
      "date": "2024-10-10 11:38:06"
    },
    {
      "date": "2024-10-10 13:05:09",
      "team2ScoreHalf": 2,
      "result": "team_1",
      "seasonTeam1Id": "9960455e-e508-4e5c-9727-9901893e40a1",
      "team2Score": 3,
      "viewers": "55",
      "annotation": "Nemo amplus ducimus bibo aeneus creptio ulterius.",
      "roundId": "5edab335-4d56-4315-9077-f37deb06d8bc",
      "id": "873cff3a-6bf6-4e86-b1a6-d02b66e8689e",
      "stadium": "Medhurst, Lebsack and Legros",
      "team1ScoreHalf": 9,
      "team1Score": 10,
      "seasonTeam2Id": "8a475a38-1ed1-4987-abb9-67dca08a4623"
    },
    {
      "date": "2024-10-09 23:03:55",
      "team2ScoreHalf": 6,
      "team1Score": 3,
      "team2Score": 7,
      "result": "team_2",
      "viewers": "962",
      "roundId": "4f7e1243-db37-4343-9441-111f1c2ea71d",
      "seasonTeam1Id": "a9b8aebc-869e-4dc4-97ff-6a39f7c16118",
      "id": "72d1e9c7-47e5-434b-b5d6-c4c5635f2734",
      "stadium": "Kuhic - Lemke",
      "team1ScoreHalf": 2,
      "annotation": "Triduana eaque facere cariosus cibus rem tremo cubicularis velut.",
      "seasonTeam2Id": "16f78128-73e1-48cd-9d02-e5d9b03279d3"
    },
    {
      "team2ScoreHalf": 8,
      "team2Score": 9,
      "annotation": "Comes consectetur catena tabgo reiciendis minus vaco similique quis crinis.",
      "roundId": "30d7cd06-1b41-4cb5-8011-56e7a1f53168",
      "id": "52c5cba4-efdb-421b-8325-1c071aea883e",
      "date": "2024-10-10 09:44:56",
      "stadium": "Kihn, Howe and Wunsch",
      "team1ScoreHalf": 1,
      "team1Score": 2,
      "result": "team_2",
      "viewers": "998",
      "seasonTeam1Id": "4906daab-a9d5-443c-9d1d-d40f30480ad9",
      "seasonTeam2Id": "19aee0e1-7dcb-4c8a-addb-dd33899da82a"
    },
    {
      "seasonTeam1Id": "5de22b35-5939-41b6-a75e-31b00b6b6cb3",
      "team1ScoreHalf": 7,
      "team2Score": 7,
      "viewers": "61",
      "annotation": "Vis textus comburo occaecati cibo ducimus.",
      "team1Score": 8,
      "result": "team_1",
      "roundId": "a1a36608-37a4-4130-96ab-e6f3a3c1105b",
      "seasonTeam2Id": null,
      "id": "42e98841-3c44-4819-acaa-949970236e23",
      "date": "2024-10-10 14:18:21",
      "stadium": "Beahan Inc",
      "team2ScoreHalf": 6
    },
    {
      "date": "2024-10-09 20:38:44",
      "team1ScoreHalf": 9,
      "team1Score": 10,
      "result": "team_1",
      "roundId": "fdfd3809-131d-4a01-bf77-9f466ae62a8e",
      "id": "c8e1a7a7-3092-4424-a015-9ad210616f5e",
      "stadium": "Johns - White",
      "team2ScoreHalf": 6,
      "team2Score": 7,
      "viewers": "36",
      "annotation": "Itaque circumvenio desolo.",
      "seasonTeam1Id": null,
      "seasonTeam2Id": null
    },
    {
      "id": "15896b42-bed1-42d0-b60b-cf4154b132f1",
      "date": "2024-10-10 12:22:34",
      "team1ScoreHalf": 5,
      "team1Score": 6,
      "annotation": "Coerceo suppono sufficio.",
      "roundId": "753bf2aa-990a-4a0a-8a82-18f2dc9fa823",
      "seasonTeam2Id": "c34f9793-be8c-4b56-a5d8-8a3119cce75c",
      "stadium": "Bins, Abbott and Rowe",
      "team2ScoreHalf": 6,
      "team2Score": 7,
      "result": "team_2",
      "viewers": "656",
      "seasonTeam1Id": "f68714e5-f689-40c9-8b57-a762be3b8685"
    },
    {
      "roundId": "bc3bc234-d0a9-4c4a-a471-30cecc77f546",
      "seasonTeam2Id": null,
      "stadium": "Bruen - Heller",
      "team2ScoreHalf": 2,
      "team2Score": 3,
      "viewers": "7",
      "annotation": "Beatus verumtamen victus curvo defetiscor uter ait eius vulariter.",
      "seasonTeam1Id": "a1a2cf61-d27e-40ed-af9f-ac1baf0e6d7a",
      "id": "7f076604-8e93-48b5-be39-fb7b35d5b58e",
      "date": "2024-10-10 06:09:19",
      "team1ScoreHalf": 6,
      "team1Score": 7,
      "result": "team_1"
    },
    {
      "id": "0d46ccec-99e1-4aca-a52a-35b4b4663bc5",
      "stadium": "Rice - McClure",
      "team1Score": 2,
      "team2Score": 1,
      "roundId": "47a7f7b4-7503-4adb-9282-539da234b98d",
      "seasonTeam1Id": "90285977-2eb7-48f2-a947-870e4fa6b6ea",
      "date": "2024-10-10 08:07:07",
      "team1ScoreHalf": 1,
      "team2ScoreHalf": 0,
      "result": "team_1",
      "viewers": "257",
      "annotation": "Exercitationem surculus triumphus voluptates curis.",
      "seasonTeam2Id": "21576efc-67eb-41c1-aa5e-56276dbb521b"
    },
    {
      "team1Score": 10,
      "team2Score": 7,
      "viewers": "561",
      "annotation": "Sub stipes curis attonbitus voluptate delectatio.",
      "roundId": "f36c1a77-a3bd-44bb-927c-4ff49ba2d11d",
      "stadium": "Mante and Sons",
      "team1ScoreHalf": 9,
      "team2ScoreHalf": 6,
      "result": "team_1",
      "seasonTeam1Id": null,
      "seasonTeam2Id": null,
      "id": "bbf0ed69-1f26-4caa-89ce-f0df809b4d9f",
      "date": "2024-10-09 21:35:27"
    },
    {
      "seasonTeam2Id": null,
      "stadium": "Rohan - Lockman",
      "team2ScoreHalf": 5,
      "team1Score": 3,
      "result": "team_2",
      "viewers": "239",
      "roundId": "74ef3357-243f-4eba-bf68-ce804e9bbb54",
      "seasonTeam1Id": "69306776-c05a-4c47-82c1-028f6c1b5ec4",
      "id": "bf21cbf7-5b8a-420f-8cc9-a26b6d824eee",
      "date": "2024-10-10 17:22:19",
      "team1ScoreHalf": 2,
      "team2Score": 6,
      "annotation": "Pecco usitas capto strues aeger illum patior vis cupiditas articulus."
    },
    {
      "team1ScoreHalf": 4,
      "team1Score": 5,
      "result": "team_1",
      "viewers": "921",
      "annotation": "Solio anser annus ut aequus dicta.",
      "roundId": "b3924500-7fef-4aed-beb0-6f6b30c46050",
      "seasonTeam1Id": "00f118f7-3cf1-41ad-b4b9-195c53dc9f87",
      "id": "0a58e722-0fd1-49cb-9f1c-79a6bd2d98fc",
      "stadium": "Mayer, Bailey and Wilkinson",
      "team2ScoreHalf": 1,
      "team2Score": 2,
      "seasonTeam2Id": null,
      "date": "2024-10-10 12:46:18"
    }
  ],
  "gameEvents": [
    {
      "order": 4,
      "eventType": "goal",
      "gameId": "e27b7bd3-2030-4101-a7fd-4e77f5cb0e5b",
      "id": "a6e6e008-ec6c-4fc8-86b1-e3e99a36ecd9",
      "minute": 10,
      "partOrHalf": "first_half",
      "teamRelated": "team_2"
    },
    {
      "id": "711a3569-3051-4118-87d8-d19ee8e906b6",
      "minute": 43,
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 8,
      "eventType": "yellow_card",
      "gameId": "dac177f7-cf47-419e-9dc0-0d5ecb980a30"
    },
    {
      "teamRelated": "team_2",
      "order": 1,
      "eventType": "yellow_card",
      "gameId": "219761f2-7102-4b81-9841-89ff64945d0a",
      "id": "c9d62f2e-1c42-4a15-808a-963e51258aa3",
      "minute": 14,
      "partOrHalf": "first_half"
    },
    {
      "id": "fdd7c267-1dca-4b0b-8433-9f2afe332a43",
      "minute": 86,
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 2,
      "eventType": "yellow_card",
      "gameId": "99f2427e-a80d-478a-9981-42c96c460f8d"
    },
    {
      "id": "14d1eabe-f742-41ca-875b-49aff1d39c4a",
      "minute": 49,
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 2,
      "eventType": "goal",
      "gameId": "a80b6bb9-9685-46ad-b279-d9d64ebb0bf8"
    },
    {
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 2,
      "eventType": "yellow_card",
      "gameId": "8514946d-01b1-46dd-8a19-66758cb1b43d",
      "id": "1d4eeae3-7ad6-4810-ac92-4cc11b06d21e",
      "minute": 79
    },
    {
      "id": "e9061564-ddef-4daf-9554-44dd0b7a84f5",
      "minute": 75,
      "partOrHalf": "first_half",
      "teamRelated": "team_2",
      "order": 5,
      "eventType": "goal",
      "gameId": "2da3a63f-8a95-4237-a39e-d248a9dfbb43"
    },
    {
      "eventType": "goal",
      "gameId": "a812d5c0-605f-452f-822a-5484e0b604c1",
      "id": "514308f0-30bf-4005-8154-958c7845469b",
      "minute": 58,
      "partOrHalf": "first_half",
      "teamRelated": "team_1",
      "order": 3
    },
    {
      "id": "63ce6d4f-869b-4233-b371-ff88b95ea100",
      "minute": 30,
      "partOrHalf": "first_half",
      "teamRelated": "team_2",
      "order": 4,
      "eventType": "goal",
      "gameId": "c601ea7e-e100-41bc-890f-927f02fa21ec"
    },
    {
      "gameId": "2c4358a6-6680-4549-ab97-c9f9437db0b3",
      "id": "6a9df1d9-ca05-4dee-98f0-54c0b4d1dd5b",
      "minute": 74,
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 6,
      "eventType": "goal"
    },
    {
      "teamRelated": "team_2",
      "order": 3,
      "eventType": "yellow_card",
      "gameId": "65957e90-06ea-4d2c-9ae0-27ae7db731f0",
      "id": "92683758-b13a-4282-bcdf-b8d06098f34f",
      "minute": 29,
      "partOrHalf": "second_half"
    },
    {
      "gameId": "a7dd2731-81ee-46ca-b831-b99ca09976da",
      "id": "73d5256e-ef5a-46e2-94f3-571cc6a95ec5",
      "minute": 52,
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 7,
      "eventType": "goal"
    },
    {
      "teamRelated": "team_1",
      "order": 7,
      "eventType": "yellow_card",
      "gameId": "93df1476-ea2f-45a3-8fbe-383706fcea36",
      "id": "9630b987-eb34-4826-9054-41b427c8c39c",
      "minute": 45,
      "partOrHalf": "second_half"
    },
    {
      "eventType": "goal",
      "gameId": "871cd5ac-f392-40c2-aa33-175be9180e2d",
      "id": "f582a374-b748-4cbc-bd44-155dc2e9eccb",
      "minute": 0,
      "partOrHalf": "first_half",
      "teamRelated": "team_1",
      "order": 2
    },
    {
      "teamRelated": "team_2",
      "order": 0,
      "eventType": "yellow_card",
      "gameId": "f126766b-7bc8-48f2-b3f1-d4da3c9efe6e",
      "id": "d12930bc-55fa-49d5-8e71-0d3e1ae06928",
      "minute": 82,
      "partOrHalf": "first_half"
    },
    {
      "id": "8d90e2fa-3605-4fe3-9f9b-777c376c9e0e",
      "minute": 29,
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 7,
      "eventType": "yellow_card",
      "gameId": "72d8f94a-497d-42fa-944a-3186291f4de3"
    },
    {
      "order": 2,
      "eventType": "yellow_card",
      "gameId": "44ff1280-6dcb-4e78-90c2-91c7374e889c",
      "id": "2a015533-78fa-451e-8409-9f2ce29b128c",
      "minute": 41,
      "partOrHalf": "second_half",
      "teamRelated": "team_2"
    },
    {
      "minute": 75,
      "partOrHalf": "first_half",
      "teamRelated": "team_2",
      "order": 9,
      "eventType": "goal",
      "gameId": "44228835-b223-4cdc-ac27-9a392fc1ef38",
      "id": "8669bc08-449d-4680-b6ae-8bf478fbe7c7"
    },
    {
      "eventType": "yellow_card",
      "gameId": "fe732954-3eb9-4e98-bd80-881fb5b28aad",
      "id": "41dba5d8-db43-4ed5-aefa-b75faed3facf",
      "minute": 44,
      "partOrHalf": "first_half",
      "teamRelated": "team_1",
      "order": 3
    },
    {
      "id": "e5afb65a-8428-4845-8066-05517a2e9d28",
      "minute": 11,
      "partOrHalf": "first_half",
      "teamRelated": "team_1",
      "order": 5,
      "eventType": "goal",
      "gameId": "99f2427e-a80d-478a-9981-42c96c460f8d"
    },
    {
      "gameId": "2196c000-f5e5-4ea7-b8a9-65cb01441d61",
      "id": "eee958c3-757e-43d1-9abd-c0e8469d5c4b",
      "minute": 57,
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 4,
      "eventType": "goal"
    },
    {
      "eventType": "goal",
      "gameId": "c2a0bcbf-14ea-490e-94de-3a087f6547bc",
      "id": "c0c91d3f-edb0-4548-9d1b-f077a569c1d9",
      "minute": 54,
      "partOrHalf": "first_half",
      "teamRelated": "team_2",
      "order": 6
    },
    {
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 0,
      "eventType": "goal",
      "gameId": "e27b7bd3-2030-4101-a7fd-4e77f5cb0e5b",
      "id": "29120015-5731-4695-95d6-fa47146cf26c",
      "minute": 76
    },
    {
      "eventType": "goal",
      "gameId": "a80b6bb9-9685-46ad-b279-d9d64ebb0bf8",
      "id": "234340c6-5d94-4092-9eb2-ad8e3a23f0d5",
      "minute": 45,
      "partOrHalf": "first_half",
      "teamRelated": "team_1",
      "order": 8
    },
    {
      "id": "e4e080c3-d026-44c1-bc95-04f5dda883b7",
      "minute": 72,
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 6,
      "eventType": "goal",
      "gameId": "307d40bd-17ec-4f7d-981c-74895cba4f17"
    },
    {
      "eventType": "goal",
      "gameId": "78ac638e-f4aa-4a24-b74a-5cf1ea738614",
      "id": "89081dd2-15fc-49ad-b2b5-5a7f2de29ed3",
      "minute": 64,
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 3
    },
    {
      "id": "14eac6e2-699a-4622-9101-dbdd1ef13493",
      "minute": 20,
      "partOrHalf": "first_half",
      "teamRelated": "team_1",
      "order": 6,
      "eventType": "yellow_card",
      "gameId": "a812d5c0-605f-452f-822a-5484e0b604c1"
    },
    {
      "order": 2,
      "eventType": "yellow_card",
      "gameId": "015e1b77-fb11-4d39-879b-ab0d0ffb1c18",
      "id": "4b3eb9cf-4d53-467e-a184-bff47c7bd9ee",
      "minute": 75,
      "partOrHalf": "second_half",
      "teamRelated": "team_2"
    },
    {
      "eventType": "yellow_card",
      "gameId": "e2a3382f-42a8-4cf4-bf1e-17f0733ca889",
      "id": "5c8fadf8-0919-41d3-aa05-3e48415b089f",
      "minute": 63,
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 2
    },
    {
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 6,
      "eventType": "yellow_card",
      "gameId": "055aa856-0765-4ec1-a926-2332aa953955",
      "id": "b929441d-135c-4262-bb6b-f77968597e96",
      "minute": 51
    },
    {
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 3,
      "eventType": "goal",
      "gameId": "37debc94-9d97-406f-8c4e-eb3d62104d4d",
      "id": "107cea9a-6c42-4ba9-a4a6-cc9741bffc74",
      "minute": 84
    },
    {
      "teamRelated": "team_2",
      "order": 5,
      "eventType": "goal",
      "gameId": "d97ad885-cf5c-4cc7-927d-5fe1e8a7da83",
      "id": "c748a522-640d-492b-afd1-366fa9ccb25a",
      "minute": 48,
      "partOrHalf": "second_half"
    },
    {
      "eventType": "yellow_card",
      "gameId": "a7dd2731-81ee-46ca-b831-b99ca09976da",
      "id": "5728a4fd-6e33-4a84-99b3-af00fbaa2395",
      "minute": 18,
      "partOrHalf": "first_half",
      "teamRelated": "team_2",
      "order": 3
    },
    {
      "teamRelated": "team_2",
      "order": 9,
      "eventType": "goal",
      "gameId": "65957e90-06ea-4d2c-9ae0-27ae7db731f0",
      "id": "1256bb67-c19c-485e-b67a-bbb27832e96e",
      "minute": 41,
      "partOrHalf": "first_half"
    },
    {
      "id": "b323fe4a-377c-4594-9c6b-ed7a609cbb2b",
      "minute": 16,
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 3,
      "eventType": "yellow_card",
      "gameId": "215a8f75-9f72-4929-9233-8348142f5e5d"
    },
    {
      "eventType": "yellow_card",
      "gameId": "3736c913-97cd-4ea3-8456-f4b325498b1a",
      "id": "aa3d7b90-480b-445c-921b-97ce20631901",
      "minute": 28,
      "partOrHalf": "first_half",
      "teamRelated": "team_1",
      "order": 3
    },
    {
      "partOrHalf": "first_half",
      "teamRelated": "team_1",
      "order": 0,
      "eventType": "yellow_card",
      "gameId": "c2a0bcbf-14ea-490e-94de-3a087f6547bc",
      "id": "856e8f39-1988-40d6-86a0-fb173bee399b",
      "minute": 74
    },
    {
      "id": "1ec5ce78-f934-49c3-9b44-da0ba993ede4",
      "minute": 78,
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 5,
      "eventType": "goal",
      "gameId": "f126766b-7bc8-48f2-b3f1-d4da3c9efe6e"
    },
    {
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 7,
      "eventType": "goal",
      "gameId": "25b47f47-27a8-4789-b306-9c2fc64c035e",
      "id": "b05d710a-56d2-45ba-b9ea-aadc6d1446cf",
      "minute": 19
    },
    {
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 6,
      "eventType": "goal",
      "gameId": "925896c8-4e8b-491d-9854-a503f8e63089",
      "id": "fb526f3d-15ab-4d84-bc10-274f72c80dcb",
      "minute": 15
    },
    {
      "minute": 20,
      "partOrHalf": "first_half",
      "teamRelated": "team_1",
      "order": 3,
      "eventType": "yellow_card",
      "gameId": "276f74d1-19e8-4fda-b782-da0af85b746d",
      "id": "edea63db-b8c5-4d9d-b5d9-65b19d375f32"
    },
    {
      "eventType": "goal",
      "gameId": "d6acd16a-0e46-4cb8-a086-8c3d70b318b6",
      "id": "ebce67b4-ddf0-4fb4-a774-83cb568d59ae",
      "minute": 1,
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 5
    },
    {
      "minute": 35,
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 9,
      "eventType": "goal",
      "gameId": "89cb1f48-9214-4aaa-a11d-dd72f2c9202b",
      "id": "9be0d40b-c58c-4026-a59e-fbaa7f707e29"
    },
    {
      "partOrHalf": "first_half",
      "teamRelated": "team_2",
      "order": 8,
      "eventType": "goal",
      "gameId": "b33efe3b-4447-4fcb-b351-0a6b82a8b7d9",
      "id": "a63ea424-8578-4940-be39-71ce85bb297b",
      "minute": 20
    },
    {
      "partOrHalf": "first_half",
      "teamRelated": "team_2",
      "order": 6,
      "eventType": "yellow_card",
      "gameId": "fe732954-3eb9-4e98-bd80-881fb5b28aad",
      "id": "95d43b34-a5ed-4d65-af7e-8fd8a6ada83c",
      "minute": 82
    },
    {
      "partOrHalf": "first_half",
      "teamRelated": "team_2",
      "order": 9,
      "eventType": "goal",
      "gameId": "2196c000-f5e5-4ea7-b8a9-65cb01441d61",
      "id": "7948cfae-0dfb-455c-87d0-03e336f2ddf9",
      "minute": 42
    },
    {
      "gameId": "dc03f782-7395-4029-9e8c-1c47f0d223df",
      "id": "f8d4bbe6-cb2d-4b38-adf4-17d9f0dac593",
      "minute": 56,
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 1,
      "eventType": "yellow_card"
    },
    {
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 0,
      "eventType": "yellow_card",
      "gameId": "42e98841-3c44-4819-acaa-949970236e23",
      "id": "50a9ab3f-fb6a-48a4-adb6-339a1e0a36c3",
      "minute": 34
    },
    {
      "id": "2407149f-0a39-438f-bdc4-c6174aaccc59",
      "minute": 29,
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 4,
      "eventType": "goal",
      "gameId": "72d1e9c7-47e5-434b-b5d6-c4c5635f2734"
    },
    {
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 2,
      "eventType": "goal",
      "gameId": "52c5cba4-efdb-421b-8325-1c071aea883e",
      "id": "360a4fce-ad46-4f9a-90d2-af31b349fa3a",
      "minute": 87
    },
    {
      "id": "eff344a6-300b-4636-b106-1ab11a2baed1",
      "minute": 63,
      "partOrHalf": "first_half",
      "teamRelated": "team_1",
      "order": 2,
      "eventType": "goal",
      "gameId": "78ac638e-f4aa-4a24-b74a-5cf1ea738614"
    },
    {
      "partOrHalf": "second_half",
      "teamRelated": "team_1",
      "order": 3,
      "eventType": "yellow_card",
      "gameId": "15896b42-bed1-42d0-b60b-cf4154b132f1",
      "id": "45f861bd-ed35-43cf-a01f-70d6237fa1c4",
      "minute": 11
    },
    {
      "id": "b87b0b8d-55a2-46a1-8c37-c1d3946d544d",
      "minute": 42,
      "partOrHalf": "second_half",
      "teamRelated": "team_2",
      "order": 2,
      "eventType": "yellow_card",
      "gameId": "7f076604-8e93-48b5-be39-fb7b35d5b58e"
    },
    {
      "order": 2,
      "eventType": "yellow_card",
      "gameId": "1eeda0e8-35ae-41b9-80ff-3f1ce3079dfb",
      "id": "1c4e09bd-f6f8-430e-9322-e9930b86e075",
      "minute": 41,
      "partOrHalf": "first_half",
      "teamRelated": "team_2"
    },
    {
      "teamRelated": "team_2",
      "order": 4,
      "eventType": "yellow_card",
      "gameId": "bbf0ed69-1f26-4caa-89ce-f0df809b4d9f",
      "id": "928b7173-8bc8-4df9-b28c-e54214f6d121",
      "minute": 57,
      "partOrHalf": "first_half"
    },
    {
      "partOrHalf": "first_half",
      "teamRelated": "team_2",
      "order": 0,
      "eventType": "yellow_card",
      "gameId": "bf21cbf7-5b8a-420f-8cc9-a26b6d824eee",
      "id": "5855c568-0317-4688-a441-775a5c5491f4",
      "minute": 31
    },
    {
      "id": "88aa6054-963e-40a7-8d3c-e78480cc927e",
      "minute": 70,
      "partOrHalf": "first_half",
      "teamRelated": "team_2",
      "order": 0,
      "eventType": "yellow_card",
      "gameId": "015e1b77-fb11-4d39-879b-ab0d0ffb1c18"
    }
  ],
  "leaderboards": [],
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const keys = ['leaderboards', 'gameEvents', 'games', 'rounds', 'articles', 'seasonTeams', 'seasons', 'leagues', 'teams', 'organizationalUnits'];

    for (const key of keys) {
      if (inputData[key].length > 0) {
        res.end(JSON.stringify({ type: key, id: inputData[key].pop()['id'] }));
        return;
      }
    }

    res.end(JSON.stringify({ type: null, id: null }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

// Start the server on port 3000
const PORT = 6969;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});