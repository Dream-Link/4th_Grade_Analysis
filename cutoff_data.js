// cutoff_data.js

const CUTOFF_DB = {
    "NTSP": {
        "GEN": {
            "GEN": { cut: "146.3279" },
            "FEM": { cut: "135.6506" },
            "WID": { cut: "32.6964" },
            "DIV": { cut: "86.0888" },
            "EX":  { cut: "0.0033" }
        },
        "OBC": {
            "GEN": { cut: "138.2739" },
            "FEM": { cut: "128.3747" },
            "WID": { cut: "0.0033" },
            "DIV": { cut: "62.9038" },
            "EX":  { cut: "NA" }
        },
        "EWS": {
            "GEN": { cut: "131.6337" },
            "FEM": { cut: "122.0484" },
            "WID": { cut: "0.2585" },
            "DIV": { cut: "47.0655" },
            "EX":  { cut: "NA" }
        },
        "MBC": {
            "GEN": { cut: "132.7357" },
            "FEM": { cut: "116.6476" },
            "WID": { cut: "0.0033" },
            "DIV": { cut: "57.8038" },
            "EX":  { cut: "NA" }
        },
        "SC": {
            "GEN": { cut: "126.0259" },
            "FEM": { cut: "114.4693" },
            "WID": { cut: "0.0033" },
            "DIV": { cut: "51.5655" },
            "EX":  { cut: "NA" }
        },
        "ST": {
            "GEN": { cut: "117.0626" },
            "FEM": { cut: "110.8956" },
            "WID": { cut: "0.0033" },
            "DIV": { cut: "38.7189" },
            "EX":  { cut: "NA" }
        },
        "SAH": {
            "GEN": { cut: "0.0143" },
            "FEM": { cut: "0.0033" },
            "WID": { cut: "0.0033" },
            "DIV": { cut: "0.0033" },
            "EX":  { cut: "-" }
        }
    },
    "TSP": {
        "GEN": {
            "GEN": { cut: "116.4909" },
            "FEM": { cut: "105.4976" },
            "WID": { cut: "4.6143" },
            "DIV": { cut: "53.1944" },
            "EX":  { cut: "3.0184" }
        },
        "SC": {
            "GEN": { cut: "105.412" },
            "FEM": { cut: "97.3662" },
            "WID": { cut: "0.2731" },
            "DIV": { cut: "45.1998" },
            "EX":  { cut: "NA" }
        },
        "ST": {
            "GEN": { cut: "95.2353" },
            "FEM": { cut: "92.1806" },
            "WID": { cut: "0.0033" },
            "DIV": { cut: "9.4442" },
            "EX":  { cut: "NA" }
        }
    }
};

const HORIZONTAL_CUTOFF = {
    "NTSP": [
        { label: "LD/CP",  cut: "73.1223" },
        { label: "SPORTS", cut: "0.0033" },
        { label: "BL/LV",  cut: "0.0033" }, 
        { label: "HI",     cut: "0.0033" }, 
        { label: "MD/MI",  cut: "0.0033" } 
    ],
    "TSP": [
        { label: "LD/CP",  cut: "33.6563" },
        { label: "SPORTS", cut: "0.0033" },
        { label: "B/LV",  cut: "0.0033" },
        { label: "HI",     cut: "0.3242" },
        { label: "MD/MI",  cut: "0.3242" }
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
