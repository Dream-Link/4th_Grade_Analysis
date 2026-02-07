// cutoff_data.js

const CUTOFF_DB = {
    "NTSP": {
        "GEN": {
            "GEN": { cut: "144.2955" },
            "FEM": { cut: "134.9021" },
            "WID": { cut: "30.6569" },
            "DIV": { cut: "86.0888" },
            "EX":  { cut: "0.0035" }
        },
        "OBC": {
            "GEN": { cut: "136.1224" },
            "FEM": { cut: "126.1377" },
            "WID": { cut: "0.0035" },
            "DIV": { cut: "61.4786" },
            "EX":  { cut: "NA" }
        },
        "EWS": {
            "GEN": { cut: "129.1103" },
            "FEM": { cut: "119.7978" },
            "WID": { cut: "0.017" },
            "DIV": { cut: "16.7286" },
            "EX":  { cut: "NA" }
        },
        "MBC": {
            "GEN": { cut: "130.2844" },
            "FEM": { cut: "115.2445" },
            "WID": { cut: "0.0033" },
            "DIV": { cut: "56.5488" },
            "EX":  { cut: "NA" }
        },
        "SC": {
            "GEN": { cut: "123.8287" },
            "FEM": { cut: "112.248" },
            "WID": { cut: "0.0035" },
            "DIV": { cut: "50.5545" },
            "EX":  { cut: "NA" }
        },
        "ST": {
            "GEN": { cut: "114.6136" },
            "FEM": { cut: "108.8068" },
            "WID": { cut: "0.0035" },
            "DIV": { cut: "38.2753" },
            "EX":  { cut: "NA" }
        },
        "SAH": {
            "GEN": { cut: "0.0307" },
            "FEM": { cut: "0.0035" },
            "WID": { cut: "3.8805" },
            "DIV": { cut: "16.0842" },
            "EX":  { cut: "-" }
        }
    },
    "TSP": {
        "GEN": {
            "GEN": { cut: "114.5787" },
            "FEM": { cut: "103.5956" },
            "WID": { cut: "2.2664" },
            "DIV": { cut: "53.2237" },
            "EX":  { cut: "3.0985" }
        },
        "SC": {
            "GEN": { cut: "103.0029" },
            "FEM": { cut: "96.6704" },
            "WID": { cut: "0.3591" },
            "DIV": { cut: "45.3045" },
            "EX":  { cut: "NA" }
        },
        "ST": {
            "GEN": { cut: "94.3851" },
            "FEM": { cut: "91.6757" },
            "WID": { cut: "0.0035" },
            "DIV": { cut: "9.1706" },
            "EX":  { cut: "NA" }
        }
    }
};

const HORIZONTAL_CUTOFF = {
    "NTSP": [
        { label: "LD/CP",  cut: "70.833" },
        { label: "SPORTS", cut: "0.0035" },
        { label: "BL/LV",  cut: "0.0035" }, 
        { label: "HI",     cut: "0.0035" }, 
        { label: "MD/MI",  cut: "0.0035" } 
    ],
    "TSP": [
        { label: "LD/CP",  cut: "3.1949" },
        { label: "SPORTS", cut: "0.033" },
        { label: "B/LV",  cut: "0.0033" },
        { label: "HI",     cut: "0.4139" },
        { label: "MD/MI",  cut: "0.4139" }
    ]
};

const SHIFT_ATTENDANCE = {
    "1": { date: "19-09-2025 (Morn)", total: "4,11,843", pres: "3,47,694", abs: "64,149", per: "84.42%" },
    "2": { date: "19-09-2025 (Eve)",  total: "4,11,843", pres: "3,51,269", abs: "60,574", per: "85.29%" },
    "3": { date: "20-09-2025 (Morn)", total: "4,11,843", pres: "3,52,602", abs: "59,241", per: "85.62%" },
    "4": { date: "20-09-2025 (Eve)",  total: "4,11,843", pres: "3,54,970", abs: "56,873", per: "86.19%" },
    "5": { date: "21-09-2025 (Morn)", total: "4,11,843", pres: "3,55,336", abs: "56,507", per: "86.28%" },
    "6": { date: "21-09-2025 (Eve)",  total: "4,11,851", pres: "3,55,327", abs: "56,524", per: "86.28%" }
};
