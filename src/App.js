import React, { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import Rules from './components/Rules';

const data = {
    "solutions": [
          {
                "key": 0,
                "name": "Kebano"
          },
          {
                "key": 1,
                "name": "Kamara"
          },
          {
                "key": 2,
                "name": "Elneny"
          },
          {
                "key": 3,
                "name": "Barnes"
          },
          {
                "key": 4,
                "name": "Cavani"
          },
          {
                "key": 5,
                "name": "Stones"
          },
          {
                "key": 6,
                "name": "Bruyne"
          },
          {
                "key": 7,
                "name": "Traore"
          },
          {
                "key": 8,
                "name": "McGinn"
          },
          {
                "key": 9,
                "name": "Soucek"
          },
          {
                "key": 10,
                "name": "Haller"
          },
          {
                "key": 11,
                "name": "Wilson"
          },
          {
                "key": 12,
                "name": "Davies"
          },
          {
                "key": 13,
                "name": "Alzate"
          },
          {
                "key": 14,
                "name": "Maupay"
          },
          {
                "key": 15,
                "name": "Werner"
          },
          {
                "key": 16,
                "name": "Hector"
          },
          {
                "key": 17,
                "name": "Lamela"
          },
          {
                "key": 18,
                "name": "Hayden"
          },
          {
                "key": 19,
                "name": "Justin"
          },
          {
                "key": 20,
                "name": "Ampadu"
          },
          {
                "key": 21,
                "name": "Walker"
          },
          {
                "key": 22,
                "name": "Alonso"
          },
          {
                "key": 23,
                "name": "Taylor"
          },
          {
                "key": 24,
                "name": "Osborn"
          },
          {
                "key": 25,
                "name": "Ayling"
          },
          {
                "key": 26,
                "name": "Dallas"
          },
          {
                "key": 27,
                "name": "Cooper"
          },
          {
                "key": 28,
                "name": "Mahrez"
          },
          {
                "key": 29,
                "name": "Torres"
          },
          {
                "key": 30,
                "name": "Alvaro"
          },
          {
                "key": 31,
                "name": "Aurier"
          },
          {
                "key": 32,
                "name": "Fraser"
          },
          {
                "key": 33,
                "name": "Semedo"
          },
          {
                "key": 34,
                "name": "Aguero"
          },
          {
                "key": 35,
                "name": "Basham"
          },
          {
                "key": 36,
                "name": "Lemina"
          },
          {
                "key": 37,
                "name": "Coufal"
          },
          {
                "key": 38,
                "name": "McNeil"
          },
          {
                "key": 39,
                "name": "Garcia"
          },
          {
                "key": 40,
                "name": "Marcal"
          },
          {
                "key": 41,
                "name": "Murphy"
          },
          {
                "key": 42,
                "name": "Lowton"
          },
          {
                "key": 43,
                "name": "Ziyech"
          },
          {
                "key": 44,
                "name": "Thomas"
          },
          {
                "key": 45,
                "name": "Partey"
          },
          {
                "key": 46,
                "name": "Milner"
          },
          {
                "key": 47,
                "name": "Fofana"
          },
          {
                "key": 48,
                "name": "Telles"
          },
          {
                "key": 49,
                "name": "Kilman"
          },
          {
                "key": 50,
                "name": "Nelson"
          },
          {
                "key": 51,
                "name": "Giroud"
          },
          {
                "key": 52,
                "name": "Benson"
          },
          {
                "key": 53,
                "name": "Cahill"
          },
          {
                "key": 54,
                "name": "Austin"
          },
          {
                "key": 55,
                "name": "Ramsey"
          },
          {
                "key": 56,
                "name": "Zeqiri"
          },
          {
                "key": 57,
                "name": "Yedlin"
          },
          {
                "key": 58,
                "name": "Bailly"
          },
          {
                "key": 59,
                "name": "Valery"
          },
          {
                "key": 60,
                "name": "Harper"
          },
          {
                "key": 61,
                "name": "Salisu"
          },
          {
                "key": 62,
                "name": "Dawson"
          },
          {
                "key": 63,
                "name": "Diallo"
          },
          {
                "key": 64,
                "name": "Soares"
          },
          {
                "key": 65,
                "name": "Diagne"
          },
          {
                "key": 66,
                "name": "Hoever"
          },
          {
                "key": 67,
                "name": "Mateta"
          },
          {
                "key": 68,
                "name": "Sanson"
          },
          {
                "key": 69,
                "name": "Krafth"
          },
          {
                "key": 70,
                "name": "Onomah"
          },
          {
                "key": 71,
                "name": "Wesley"
          },
          {
                "key": 72,
                "name": "Elanga"
          },
          {
                "key": 73,
                "name": "Traore"
          },
          {
                "key": 74,
                "name": "Gnabry"
          },
          {
                "key": 75,
                "name": "Muller"
          },
          {
                "key": 76,
                "name": "Barkok"
          },
          {
                "key": 77,
                "name": "Kamada"
          },
          {
                "key": 78,
                "name": "Prietl"
          },
          {
                "key": 79,
                "name": "Soukou"
          },
          {
                "key": 80,
                "name": "Pieper"
          },
          {
                "key": 81,
                "name": "Bulter"
          },
          {
                "key": 82,
                "name": "Promel"
          },
          {
                "key": 83,
                "name": "Becker"
          },
          {
                "key": 84,
                "name": "Vargas"
          },
          {
                "key": 85,
                "name": "Jensen"
          },
          {
                "key": 86,
                "name": "Skhiri"
          },
          {
                "key": 87,
                "name": "Hector"
          },
          {
                "key": 88,
                "name": "Dabbur"
          },
          {
                "key": 89,
                "name": "Geiger"
          },
          {
                "key": 90,
                "name": "Brenet"
          },
          {
                "key": 91,
                "name": "Piatek"
          },
          {
                "key": 92,
                "name": "Boyata"
          },
          {
                "key": 93,
                "name": "Castro"
          },
          {
                "key": 94,
                "name": "Didavi"
          },
          {
                "key": 95,
                "name": "Sallai"
          },
          {
                "key": 96,
                "name": "Sancho"
          },
          {
                "key": 97,
                "name": "Witsel"
          },
          {
                "key": 98,
                "name": "Stindl"
          },
          {
                "key": 99,
                "name": "Lainer"
          },
          {
                "key": 100,
                "name": "Nkunku"
          },
          {
                "key": 101,
                "name": "Mateta"
          },
          {
                "key": 102,
                "name": "Brooks"
          },
          {
                "key": 103,
                "name": "Victor"
          },
          {
                "key": 104,
                "name": "Alario"
          },
          {
                "key": 105,
                "name": "Schick"
          },
          {
                "key": 106,
                "name": "Gruezo"
          },
          {
                "key": 107,
                "name": "Dahoud"
          },
          {
                "key": 108,
                "name": "Hartel"
          },
          {
                "key": 109,
                "name": "Thuram"
          },
          {
                "key": 110,
                "name": "Ginter"
          },
          {
                "key": 111,
                "name": "Bender"
          },
          {
                "key": 112,
                "name": "Pavard"
          },
          {
                "key": 113,
                "name": "Schmid"
          },
          {
                "key": 114,
                "name": "Gunter"
          },
          {
                "key": 115,
                "name": "Heintz"
          },
          {
                "key": 116,
                "name": "Arnold"
          },
          {
                "key": 117,
                "name": "Brandt"
          },
          {
                "key": 118,
                "name": "Hofler"
          },
          {
                "key": 119,
                "name": "Serdar"
          },
          {
                "key": 120,
                "name": "Otavio"
          },
          {
                "key": 121,
                "name": "Darida"
          },
          {
                "key": 122,
                "name": "Friedl"
          },
          {
                "key": 123,
                "name": "Leckie"
          },
          {
                "key": 124,
                "name": "Strobl"
          },
          {
                "key": 125,
                "name": "Bailey"
          },
          {
                "key": 126,
                "name": "Embolo"
          },
          {
                "key": 127,
                "name": "Elvedi"
          },
          {
                "key": 128,
                "name": "Jakobs"
          },
          {
                "key": 129,
                "name": "Younes"
          },
          {
                "key": 130,
                "name": "Kramer"
          },
          {
                "key": 131,
                "name": "Akanji"
          },
          {
                "key": 132,
                "name": "Klauss"
          },
          {
                "key": 133,
                "name": "Kilian"
          },
          {
                "key": 134,
                "name": "Hazard"
          },
          {
                "key": 135,
                "name": "Toprak"
          },
          {
                "key": 136,
                "name": "Kostic"
          },
          {
                "key": 137,
                "name": "Konate"
          },
          {
                "key": 138,
                "name": "Kubler"
          },
          {
                "key": 139,
                "name": "Knoche"
          },
          {
                "key": 140,
                "name": "Lazaro"
          },
          {
                "key": 141,
                "name": "Weiser"
          },
          {
                "key": 142,
                "name": "Bialek"
          },
          {
                "key": 143,
                "name": "Stoger"
          },
          {
                "key": 144,
                "name": "Schulz"
          },
          {
                "key": 145,
                "name": "Schopf"
          },
          {
                "key": 146,
                "name": "Martin"
          },
          {
                "key": 147,
                "name": "Mendyl"
          },
          {
                "key": 148,
                "name": "Kutucu"
          },
          {
                "key": 149,
                "name": "Dinkci"
          },
          {
                "key": 150,
                "name": "Davies"
          },
          {
                "key": 151,
                "name": "Tigges"
          },
          {
                "key": 152,
                "name": "Hasebe"
          },
          {
                "key": 153,
                "name": "Ndicka"
          },
          {
                "key": 154,
                "name": "Hubner"
          },
          {
                "key": 155,
                "name": "Oxford"
          },
          {
                "key": 156,
                "name": "Keitel"
          },
          {
                "key": 157,
                "name": "Cestic"
          },
          {
                "key": 158,
                "name": "Thommy"
          },
          {
                "key": 159,
                "name": "Dennis"
          },
          {
                "key": 160,
                "name": "Szalai"
          },
          {
                "key": 161,
                "name": "Rutter"
          },
          {
                "key": 162,
                "name": "Dardai"
          },
          {
                "key": 163,
                "name": "Ronnow"
          },
          {
                "key": 164,
                "name": "Knauff"
          },
          {
                "key": 165,
                "name": "Jedvaj"
          },
          {
                "key": 166,
                "name": "Idrizi"
          },
          {
                "key": 167,
                "name": "Laimer"
          },
          {
                "key": 168,
                "name": "Zapata"
          },
          {
                "key": 169,
                "name": "Gosens"
          },
          {
                "key": 170,
                "name": "Lukaku"
          },
          {
                "key": 171,
                "name": "Valoti"
          },
          {
                "key": 172,
                "name": "Chiesa"
          },
          {
                "key": 173,
                "name": "Duncan"
          },
          {
                "key": 174,
                "name": "Venuti"
          },
          {
                "key": 175,
                "name": "Pulgar"
          },
          {
                "key": 176,
                "name": "Sottil"
          },
          {
                "key": 177,
                "name": "Kouame"
          },
          {
                "key": 178,
                "name": "Caputo"
          },
          {
                "key": 179,
                "name": "Peluso"
          },
          {
                "key": 180,
                "name": "Toljan"
          },
          {
                "key": 181,
                "name": "Traore"
          },
          {
                "key": 182,
                "name": "Larsen"
          },
          {
                "key": 183,
                "name": "Fabian"
          },
          {
                "key": 184,
                "name": "Lozano"
          },
          {
                "key": 185,
                "name": "Acerbi"
          },
          {
                "key": 186,
                "name": "Correa"
          },
          {
                "key": 187,
                "name": "Juwara"
          },
          {
                "key": 188,
                "name": "Danilo"
          },
          {
                "key": 189,
                "name": "Barrow"
          },
          {
                "key": 190,
                "name": "Rincon"
          },
          {
                "key": 191,
                "name": "Klavan"
          },
          {
                "key": 192,
                "name": "Farago"
          },
          {
                "key": 193,
                "name": "Spalek"
          },
          {
                "key": 194,
                "name": "Tonali"
          },
          {
                "key": 195,
                "name": "Zmrhal"
          },
          {
                "key": 196,
                "name": "Maroni"
          },
          {
                "key": 197,
                "name": "Vieira"
          },
          {
                "key": 198,
                "name": "Colley"
          },
          {
                "key": 199,
                "name": "Pandev"
          },
          {
                "key": 200,
                "name": "Romero"
          },
          {
                "key": 201,
                "name": "Borini"
          },
          {
                "key": 202,
                "name": "Veloso"
          },
          {
                "key": 203,
                "name": "Ginter"
          },
          {
                "key": 204,
                "name": "Rabiot"
          },
          {
                "key": 205,
                "name": "Ramsey"
          },
          {
                "key": 206,
                "name": "Vrioni"
          },
          {
                "key": 207,
                "name": "Donati"
          },
          {
                "key": 208,
                "name": "Kurtic"
          },
          {
                "key": 209,
                "name": "Ribery"
          },
          {
                "key": 210,
                "name": "Bremer"
          },
          {
                "key": 211,
                "name": "Tameze"
          },
          {
                "key": 212,
                "name": "Grassi"
          },
          {
                "key": 213,
                "name": "Destro"
          },
          {
                "key": 214,
                "name": "Obiang"
          },
          {
                "key": 215,
                "name": "Muldur"
          },
          {
                "key": 216,
                "name": "Defrel"
          },
          {
                "key": 217,
                "name": "Nandez"
          },
          {
                "key": 218,
                "name": "Jankto"
          },
          {
                "key": 219,
                "name": "Gabbia"
          },
          {
                "key": 220,
                "name": "Kessie"
          },
          {
                "key": 221,
                "name": "Muriel"
          },
          {
                "key": 222,
                "name": "Patric"
          },
          {
                "key": 223,
                "name": "Farias"
          },
          {
                "key": 224,
                "name": "Deiola"
          },
          {
                "key": 225,
                "name": "Badelj"
          },
          {
                "key": 226,
                "name": "Krunic"
          },
          {
                "key": 227,
                "name": "Morata"
          },
          {
                "key": 228,
                "name": "Ionita"
          },
          {
                "key": 229,
                "name": "Hakimi"
          },
          {
                "key": 230,
                "name": "Dragus"
          },
          {
                "key": 231,
                "name": "Molina"
          },
          {
                "key": 232,
                "name": "Santon"
          },
          {
                "key": 233,
                "name": "Falque"
          },
          {
                "key": 234,
                "name": "Parolo"
          },
          {
                "key": 235,
                "name": "Dybala"
          },
          {
                "key": 236,
                "name": "Ferrer"
          },
          {
                "key": 237,
                "name": "Lirola"
          },
          {
                "key": 238,
                "name": "Ibanez"
          },
          {
                "key": 239,
                "name": "Ilicic"
          },
          {
                "key": 240,
                "name": "Maggio"
          },
          {
                "key": 241,
                "name": "Benali"
          },
          {
                "key": 242,
                "name": "Arslan"
          },
          {
                "key": 243,
                "name": "Walace"
          },
          {
                "key": 244,
                "name": "Muriqi"
          },
          {
                "key": 245,
                "name": "Chabot"
          },
          {
                "key": 246,
                "name": "Agoume"
          },
          {
                "key": 247,
                "name": "Hickey"
          },
          {
                "key": 248,
                "name": "Mojica"
          },
          {
                "key": 249,
                "name": "Quarta"
          },
          {
                "key": 250,
                "name": "Pobega"
          },
          {
                "key": 251,
                "name": "Lyanco"
          },
          {
                "key": 252,
                "name": "Lovato"
          },
          {
                "key": 253,
                "name": "Villar"
          },
          {
                "key": 254,
                "name": "Regini"
          },
          {
                "key": 255,
                "name": "Udogie"
          },
          {
                "key": 256,
                "name": "Sandro"
          },
          {
                "key": 257,
                "name": "Osorio"
          },
          {
                "key": 258,
                "name": "Gumina"
          },
          {
                "key": 259,
                "name": "Maehle"
          },
          {
                "key": 260,
                "name": "Felipe"
          },
          {
                "key": 261,
                "name": "Valero"
          },
          {
                "key": 262,
                "name": "Foulon"
          },
          {
                "key": 263,
                "name": "Arthur"
          },
          {
                "key": 264,
                "name": "Djidji"
          },
          {
                "key": 265,
                "name": "Santos"
          },
          {
                "key": 266,
                "name": "Tomori"
          },
          {
                "key": 267,
                "name": "Rugani"
          },
          {
                "key": 268,
                "name": "Traore"
          },
          {
                "key": 269,
                "name": "Darboe"
          },
          {
                "key": 270,
                "name": "Vecino"
          },
          {
                "key": 271,
                "name": "Kallon"
          },
          {
                "key": 272,
                "name": "Garcia"
          },
          {
                "key": 273,
                "name": "Nolito"
          },
          {
                "key": 274,
                "name": "Araujo"
          },
          {
                "key": 275,
                "name": "Mendez"
          },
          {
                "key": 276,
                "name": "Machis"
          },
          {
                "key": 277,
                "name": "Marcos"
          },
          {
                "key": 278,
                "name": "Adrian"
          },
          {
                "key": 279,
                "name": "Torres"
          },
          {
                "key": 280,
                "name": "Duarte"
          },
          {
                "key": 281,
                "name": "Joselu"
          },
          {
                "key": 282,
                "name": "Moreno"
          },
          {
                "key": 283,
                "name": "Bartra"
          },
          {
                "key": 284,
                "name": "Ruibal"
          },
          {
                "key": 285,
                "name": "Michel"
          },
          {
                "key": 286,
                "name": "Varane"
          },
          {
                "key": 287,
                "name": "Modric"
          },
          {
                "key": 288,
                "name": "Parejo"
          },
          {
                "key": 289,
                "name": "Maffeo"
          },
          {
                "key": 290,
                "name": "Carlos"
          },
          {
                "key": 291,
                "name": "Guedes"
          },
          {
                "key": 292,
                "name": "Bardhi"
          },
          {
                "key": 293,
                "name": "Radoja"
          },
          {
                "key": 294,
                "name": "Albiol"
          },
          {
                "key": 295,
                "name": "Chakla"
          },
          {
                "key": 296,
                "name": "Enrich"
          },
          {
                "key": 297,
                "name": "Suarez"
          },
          {
                "key": 298,
                "name": "Pulido"
          },
          {
                "key": 299,
                "name": "Espino"
          },
          {
                "key": 300,
                "name": "Niguez"
          },
          {
                "key": 301,
                "name": "Correa"
          },
          {
                "key": 302,
                "name": "Piatti"
          },
          {
                "key": 303,
                "name": "Kenedy"
          },
          {
                "key": 304,
                "name": "Junior"
          },
          {
                "key": 305,
                "name": "Molina"
          },
          {
                "key": 306,
                "name": "Pjanic"
          },
          {
                "key": 307,
                "name": "Iborra"
          },
          {
                "key": 308,
                "name": "Tejero"
          },
          {
                "key": 309,
                "name": "Melero"
          },
          {
                "key": 310,
                "name": "Seoane"
          },
          {
                "key": 311,
                "name": "Siovas"
          },
          {
                "key": 312,
                "name": "Merino"
          },
          {
                "key": 313,
                "name": "Sancet"
          },
          {
                "key": 314,
                "name": "Lozano"
          },
          {
                "key": 315,
                "name": "Fontan"
          },
          {
                "key": 316,
                "name": "Juanmi"
          },
          {
                "key": 317,
                "name": "Partey"
          },
          {
                "key": 318,
                "name": "Felipe"
          },
          {
                "key": 319,
                "name": "Blanco"
          },
          {
                "key": 320,
                "name": "Kounde"
          },
          {
                "key": 321,
                "name": "Jordan"
          },
          {
                "key": 322,
                "name": "Sidnei"
          },
          {
                "key": 323,
                "name": "Burgos"
          },
          {
                "key": 324,
                "name": "Mendia"
          },
          {
                "key": 325,
                "name": "Rigoni"
          },
          {
                "key": 326,
                "name": "Frutos"
          },
          {
                "key": 327,
                "name": "Guridi"
          },
          {
                "key": 328,
                "name": "Vitolo"
          },
          {
                "key": 329,
                "name": "Hazard"
          },
          {
                "key": 330,
                "name": "Josema"
          },
          {
                "key": 331,
                "name": "Alvaro"
          },
          {
                "key": 332,
                "name": "Zaldua"
          },
          {
                "key": 333,
                "name": "Cabaco"
          },
          {
                "key": 334,
                "name": "Gudelj"
          },
          {
                "key": 335,
                "name": "Alcala"
          },
          {
                "key": 336,
                "name": "Sagnan"
          },
          {
                "key": 337,
                "name": "Soares"
          },
          {
                "key": 338,
                "name": "Lainez"
          },
          {
                "key": 339,
                "name": "Mojica"
          },
          {
                "key": 340,
                "name": "Capoue"
          },
          {
                "key": 341,
                "name": "Moriba"
          },
          {
                "key": 342,
                "name": "Martin"
          },
          {
                "key": 343,
                "name": "Solari"
          },
          {
                "key": 344,
                "name": "Stegen"
          },
          {
                "key": 345,
                "name": "Boacho"
          },
          {
                "key": 346,
                "name": "Umtiti"
          }
    ]
}

const App = () => {
    const [solution, setSolution] = useState('');
    const [players, setPlayers] = useState([]);
    const [gameInfo, setGameInfo] = useState(false);
     useEffect(() => {
        // fetch('http://localhost:3001/solutions').then(res => res.json()).then(data => {
        //     const playerNames = data.map((item) => item.name.toLowerCase())
        //     const randomSolution = data[Math.floor(Math.random()*data.length)];
        //     setSolution(randomSolution.name.toLowerCase());
        //     setPlayers(playerNames);
        // });
        const solutions = data.solutions;
        const playerNames = solutions.map((item) => item.name.toLowerCase())
        const randomSolution = solutions[Math.floor(Math.random()*solutions.length)]
        setSolution(randomSolution.name.toLowerCase());
        setPlayers(playerNames)
    }, [])

    const clickHandler = () => {
        setGameInfo(true);
    }
    
    return (
        <div className='App'>
            <div className='header'>
                <i className='fas fa-futbol'></i>
                <h1>Footie Lingo</h1>
                <i className='fas fa-futbol'></i>
            </div>
            <span><i onClick={clickHandler} className="fa fa-question-circle question-style"></i></span>
            {gameInfo && <Rules setGameInfo={setGameInfo}/>}
            {solution && <Wordle solution={solution} players={players}/>}
        </div>
    )
}

export default App;