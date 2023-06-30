import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous({onOptionSelect}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
    //   filterOptions={(x) => x}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(event, newValue) => {
        onOptionSelect(newValue);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{ backgroundColor: '#FFFFFF',}}
        //   label="Search company"
        placeholder='Search company'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [
    {
        name: "ADANI GROUP",
        isin: "INE198H01019",
        token: "524412",
        exchange: "BSE"
      },
      {
        name: "TATA CONSULTANCY SERVICES",
        isin: "INE198H01019",
        token: "524412",
        exchange: "BSE"
      },
      {
        name: "RELIANCE INDUSTRIES",
        isin: "INE198H01019",
        token: "524412",
        exchange: "BSE"
      },
  {
    name: "AAREY DRUGS  PHARMACEUTICALS",
    isin: "INE198H01019",
    token: "524412",
    exchange: "BSE"
  },
  {
    name: "RIDDHI SIDDHI GLUCO BIOLS LTD",
    isin: "INE249D01019",
    token: "524480",
    exchange: "BSE"
  },
  {
    name: "EQUIPPP SOCIAL IMPACT TECHNOLO",
    isin: "INE217G01035",
    token: "590057",
    exchange: "BSE"
  },
  {
    name: "LAFFANS PETROCHEMICALS LTD",
    isin: "INE919B01011",
    token: "524522",
    exchange: "BSE"
  },
  {
    name: "PHARMAIDS PHARMACEUTICALS LTD",
    isin: "INE117D01018",
    token: "524572",
    exchange: "BSE"
  },
  {
    name: "ASHOK ALCOCHEM LTD",
    isin: "INE994D01010",
    token: "524594",
    exchange: "BSE"
  },
  {
    name: "WELCURE DRUGS  PHARMACEUTICAL",
    isin: "INE331C01017",
    token: "524661",
    exchange: "BSE"
  },
  {
    name: "INDIA MOTOR PARTS  ACCESSORIE",
    isin: "INE547E01014",
    token: "590065",
    exchange: "BSE"
  },
  {
    name: "WHITE ORGANIC AGRO LIMITED",
    isin: "INE146C01019",
    token: "513713",
    exchange: "BSE"
  },
  {
    name: "ELEGANT FLORICULTURE  AGROTEC",
    isin: "INE152E01013",
    token: "526473",
    exchange: "BSE"
  },
  {
    name: "RISHIROOP LIMITED",
    isin: "INE582D01013",
    token: "526492",
    exchange: "BSE"
  },
  {
    name: "WORLDWIDE ALUMINIUM LIMITED",
    isin: "INE550D01010",
    token: "526525",
    exchange: "BSE"
  },
  {
    name: "PADMANABH INDUSTRIES LTD",
    isin: "INE743D01011",
    token: "526905",
    exchange: "BSE"
  },
  {
    name: "DHOOT INDUSTRIAL FINANCE LTD",
    isin: "INE313G01016",
    token: "526971",
    exchange: "BSE"
  },
  {
    name: "OPTIEMUS INFRACOM LTD",
    isin: "INE350C01017",
    token: "530135",
    exchange: "BSE"
  },
  {
    name: "ATHARV ENTERPRISES LTD",
    isin: "INE354E01031",
    token: "530187",
    exchange: "BSE"
  },
  {
    name: "KOTHARI PRODUCTS LTD",
    isin: "INE823A01017",
    token: "530299",
    exchange: "BSE"
  },
  {
    name: "TERAI TEA COLTD",
    isin: "INE390D01011",
    token: "530533",
    exchange: "BSE"
  },
  {
    name: "COSCO INDIA LTD",
    isin: "INE949B01018",
    token: "530545",
    exchange: "BSE"
  },
  {
    name: "COMPETENT AUTOMOBILES COLTD",
    isin: "INE823B01015",
    token: "531041",
    exchange: "BSE"
  },
  {
    name: "KEMISTAR CORPORATION LIMITED",
    isin: "INE971L01029",
    token: "531163",
    exchange: "BSE"
  },
  {
    name: "TAVERNIER RESOURCES LIMI",
    isin: "INE355H01015",
    token: "531190",
    exchange: "BSE"
  },
  {
    name: "INDIA INFRASPACE LTD",
    isin: "INE954M01031",
    token: "531343",
    exchange: "BSE"
  },
  {
    name: "ABATE AS INDUSTRIES LIMITED",
    isin: "INE454E01013",
    token: "531658",
    exchange: "BSE"
  },
  {
    name: "RR METALMAKERS INDIA LIMITED",
    isin: "INE117K01013",
    token: "531667",
    exchange: "BSE"
  },
  {
    name: "PRITHVI EXCHANGE INDIA LIMIT",
    isin: "INE621B01021",
    token: "531688",
    exchange: "BSE"
  },
  {
    name: "BIOGEN PHARMACHEM INDUSTRIES L",
    isin: "INE703D01023",
    token: "531752",
    exchange: "BSE"
  },
  {
    name: "LAHOTI OVERSEAS LTD",
    isin: "INE515C01023",
    token: "531842",
    exchange: "BSE"
  },
  {
    name: "GUJARAT METALLIC COAL  COKE L",
    isin: "INE146F01020",
    token: "531881",
    exchange: "BSE"
  },
  {
    name: "CCL INTERNATIONAL LTD",
    isin: "INE778E01031",
    token: "531900",
    exchange: "BSE"
  },
  {
    name: "TCI INDUSTRIES LTD",
    isin: "INE920B01019",
    token: "532262",
    exchange: "BSE"
  },
  {
    name: "CEREBRA INTEGRATED TECHNOLOGIE",
    isin: "INE345B01019",
    token: "532413",
    exchange: "BSE"
  },
  {
    name: "COMPUAGE INFOCOM LTD",
    isin: "INE070C01037",
    token: "532456",
    exchange: "BSE"
  },
  {
    name: "TVS ELECTRONICS LTD",
    isin: "INE236G01019",
    token: "532513",
    exchange: "BSE"
  },
  {
    name: "SAKUMA EXPORTS LTD",
    isin: "INE190H01024",
    token: "532713",
    exchange: "BSE"
  },
  {
    name: "REDINGTON INDIA LTD",
    isin: "INE891D01026",
    token: "532805",
    exchange: "BSE"
  },
  {
    name: "METROGLOBAL LIMITED",
    isin: "INE085D01033",
    token: "500159",
    exchange: "BSE"
  },
  {
    name: "HCL INFOSYSTEMS LTD",
    isin: "INE236A01020",
    token: "500179",
    exchange: "BSE"
  },
  {
    name: "SALORA INTERNATIONAL LTD",
    isin: "INE924A01013",
    token: "500370",
    exchange: "BSE"
  },
  {
    name: "SUNDRAM FASTENERS LTD",
    isin: "INE387A01021",
    token: "500403",
    exchange: "BSE"
  },
  {
    name: "UTL INDUSTRIES LIMITED",
    isin: "INE184E01024",
    token: "500426",
    exchange: "BSE"
  },
  {
    name: "UNIPHOS ENTERPRISES LTD",
    isin: "INE037A01022",
    token: "500429",
    exchange: "BSE"
  },
  {
    name: "FUTURE CONSUMER LIMITED",
    isin: "INE220J01025",
    token: "533400",
    exchange: "BSE"
  },
  {
    name: "NOVARTIS INDIA LTD",
    isin: "INE234A01025",
    token: "500672",
    exchange: "BSE"
  },
  {
    name: "NIVAKA FASHIONS LIMITED",
    isin: "INE139E01028",
    token: "542206",
    exchange: "BSE"
  },
  {
    name: "ZUARI INDUSTRIES LIMITED",
    isin: "INE217A01012",
    token: "500780",
    exchange: "BSE"
  },
  {
    name: "FERVENT SYNERGIES LTD",
    isin: "INE258M01011",
    token: "533896",
    exchange: "BSE"
  },
  {
    name: "HEXA TRADEX LTD",
    isin: "INE750M01017",
    token: "534328",
    exchange: "BSE"
  },
  {
    name: "LYPSA GEMS  JEWELLERY LTD",
    isin: "INE142K01011",
    token: "534532",
    exchange: "BSE"
  },
  {
    name: "SUPREMEX SHINE STEELS LIMITED",
    isin: "INE175N01023",
    token: "534733",
    exchange: "BSE"
  },
  {
    name: "TRIO MERCANTILE  TRADING LTD",
    isin: "INE234G01022",
    token: "534755",
    exchange: "BSE"
  },
  {
    name: "MUKTA AGRICULTURE LIMITED",
    isin: "INE160O01031",
    token: "535204",
    exchange: "BSE"
  },
  {
    name: "MYSTIC ELECTRONICS LIMITED",
    isin: "INE159O01033",
    token: "535205",
    exchange: "BSE"
  },
  {
    name: "SREELEATHERS LTD",
    isin: "INE099F01013",
    token: "535601",
    exchange: "BSE"
  },
  {
    name: "BINNY MILLS LTD",
    isin: "INE160L01011",
    token: "535620",
    exchange: "BSE"
  },
  {
    name: "TRIMURTHI LIMITED",
    isin: "INE314I01036",
    token: "536565",
    exchange: "BSE"
  },
  {
    name: "ANAND RAYONS LIMITED",
    isin: "INE02GA01012",
    token: "542721",
    exchange: "BSE"
  },
  {
    name: "STANDARD BATTERIES LTD",
    isin: "INE502C01039",
    token: "504180",
    exchange: "BSE"
  },
  {
    name: "ELLORA TRADING LIMITED",
    isin: "INE560T01015",
    token: "542803",
    exchange: "BSE"
  },
  {
    name: "NYSSA CORPORATION LIMITED",
    isin: "INE812K01027",
    token: "504378",
    exchange: "BSE"
  },
  {
    name: "CHEMTECH INDUSTRIAL VALVES LTD",
    isin: "INE212P01011",
    token: "537326",
    exchange: "BSE"
  },
  {
    name: "VIAAN INDUSTRIES LIMITED",
    isin: "INE324N01027",
    token: "537524",
    exchange: "BSE"
  },
  {
    name: "RACE ECO CHAIN LIMITED",
    isin: "INE084Q01012",
    token: "537785",
    exchange: "BSE"
  },
  {
    name: "SVP GLOBAL TEXTILES LIMITED",
    isin: "INE308E01029",
    token: "505590",
    exchange: "BSE"
  },
  {
    name: "QUASAR INDIA LTD",
    isin: "INE855P01033",
    token: "538452",
    exchange: "BSE"
  },
  {
    name: "OMANSH ENTERPRISES LTD",
    isin: "INE378P01028",
    token: "538537",
    exchange: "BSE"
  },
  {
    name: "ARMAN HOLDINGS LTD",
    isin: "INE510P01018",
    token: "538556",
    exchange: "BSE"
  },
  {
    name: "TRIVENI ENTERPRISES LTD",
    isin: "INE916P01025",
    token: "538569",
    exchange: "BSE"
  },
  {
    name: "SVP HOUSING LIMITED",
    isin: "INE369Q01017",
    token: "539041",
    exchange: "BSE"
  },
  {
    name: "HKG LIMITED",
    isin: "INE904R01027",
    token: "539097",
    exchange: "BSE"
  },
  {
    name: "PANTH INFINITY LIMITED",
    isin: "INE945O01019",
    token: "539143",
    exchange: "BSE"
  },
  {
    name: "MISHKA EXIM LIMITED",
    isin: "INE540S01019",
    token: "539220",
    exchange: "BSE"
  },
  {
    name: "ADANI TRANSMISSION LIMITED",
    isin: "INE931S01010",
    token: "539254",
    exchange: "BSE"
  },
  {
    name: "DR HABEEBULLAH LIFE SCIENCES L",
    isin: "INE579N01018",
    token: "539267",
    exchange: "BSE"
  },
  {
    name: "SYMBIOX INVESTMENT  TRADING C",
    isin: "INE653R01012",
    token: "539278",
    exchange: "BSE"
  },
  {
    name: "KEMP  COMPANY LTD",
    isin: "INE060E01018",
    token: "506530",
    exchange: "BSE"
  },
  {
    name: "MISHTANN FOODS LIMITED",
    isin: "INE094S01041",
    token: "539594",
    exchange: "BSE"
  },
  {
    name: "KHEMANI DISTRIBUTORS  MARKETI",
    isin: "INE030U01025",
    token: "539788",
    exchange: "BSE"
  },
  {
    name: "CHD CHEMICALS LIMITED",
    isin: "INE043U01010",
    token: "539800",
    exchange: "BSE"
  },
  {
    name: "HALDER VENTURE LIMITED",
    isin: "INE115S01010",
    token: "539854",
    exchange: "BSE"
  },
  {
    name: "YASH CHEMEX LIMITED",
    isin: "INE571U01010",
    token: "539939",
    exchange: "BSE"
  },
  {
    name: "BINDAL EXPORTS LIMITED",
    isin: "INE564V01013",
    token: "540148",
    exchange: "BSE"
  },
  {
    name: "OLYMPIC OIL INDUSTRIES LTD",
    isin: "INE286E01019",
    token: "507609",
    exchange: "BSE"
  },
  {
    name: "MAXIMUS INTERNATIONAL LIMITED",
    isin: "INE544W01013",
    token: "540401",
    exchange: "BSE"
  },
  {
    name: "DHRUV WELLNESS LIMITED",
    isin: "INE109Y01011",
    token: "540695",
    exchange: "BSE"
  },
  {
    name: "TRIDENT TEXOFAB LIMITED",
    isin: "INE071Y01013",
    token: "540726",
    exchange: "BSE"
  },
  {
    name: "MRC EXIM LIMITED",
    isin: "INE333Y01017",
    token: "540809",
    exchange: "BSE"
  },
  {
    name: "DIGGI MULTITRADE LIMITED",
    isin: "INE158R01012",
    token: "540811",
    exchange: "BSE"
  },
  {
    name: "VITESSE AGRO LIMITED",
    isin: "INE550U01014",
    token: "540823",
    exchange: "BSE"
  },
  {
    name: "SRU STEELS LIMITED",
    isin: "INE425C01017",
    token: "540914",
    exchange: "BSE"
  },
  {
    name: "ASHOKA METCAST LIMITED",
    isin: "INE760Y01011",
    token: "540923",
    exchange: "BSE"
  },
  {
    name: "THE YAMUNA SYNDICATE LTD",
    isin: "INE868X01014",
    token: "540980",
    exchange: "BSE"
  },
  {
    name: "GOYAL ALUMINIUMS LIMITED",
    isin: "INE705X01018",
    token: "541152",
    exchange: "BSE"
  },
  {
    name: "INDO US BIOTECH LIMITED",
    isin: "INE250Z01010",
    token: "541304",
    exchange: "BSE"
  },
  {
    name: "PALM JEWELS LIMITED",
    isin: "INE838Z01012",
    token: "541444",
    exchange: "BSE"
  },
  {
    name: "RAJNISH WELLNESS LIMITED",
    isin: "INE685Z01017",
    token: "541601",
    exchange: "BSE"
  },
  {
    name: "AUSOM ENTERPRISE LIMITED",
    isin: "INE218C01016",
    token: "509009",
    exchange: "BSE"
  },
  {
    name: "ADDSHOP ERETAIL LIMITED",
    isin: "INE01B501018",
    token: "541865",
    exchange: "BSE"
  },
  {
    name: "INNOVATIVE IDEALS AND SERVICES",
    isin: "INE492Y01011",
    token: "541983",
    exchange: "BSE"
  },
  {
    name: "A1 ACID LIMITED",
    isin: "INE911Z01017",
    token: "542012",
    exchange: "BSE"
  },
  {
    name: "SUN RETAIL LIMITED",
    isin: "INE206Z01020",
    token: "542025",
    exchange: "BSE"
  },
  {
    name: "DIKSHA GREENS LIMITED",
    isin: "INE01GR01018",
    token: "542155",
    exchange: "BSE"
  },
  {
    name: "SHANKAR LAL RAMPAL DYECHEM LI",
    isin: "INE01NE01012",
    token: "542232",
    exchange: "BSE"
  },
  {
    name: "CRAVATEX LTD",
    isin: "INE145E01017",
    token: "509472",
    exchange: "BSE"
  },
  {
    name: "ANMOL INDIA LIMITED",
    isin: "INE02AR01019",
    token: "542437",
    exchange: "BSE"
  },
  {
    name: "ASHAPURI GOLD ORNAMENT LIMITED",
    isin: "INE05FR01011",
    token: "542579",
    exchange: "BSE"
  },
  {
    name: "MSTC LIMITED",
    isin: "INE255X01014",
    token: "542597",
    exchange: "BSE"
  },
  {
    name: "NORTHERN SPIRITS LIMITED",
    isin: "INE01BL01012",
    token: "542628",
    exchange: "BSE"
  },
  {
    name: "PARSHVA ENTERPRISES LIMITED",
    isin: "INE05MV01019",
    token: "542694",
    exchange: "BSE"
  },
  {
    name: "EARUM PHARMACEUTICALS LIMITED",
    isin: "INE060601023",
    token: "542724",
    exchange: "BSE"
  },
  {
    name: "GOBLIN INDIA LIMITED",
    isin: "INE492Z01018",
    token: "542850",
    exchange: "BSE"
  },
  {
    name: "NATURAL BIOCON INDIA LIMITED",
    isin: "INE06MM01016",
    token: "543207",
    exchange: "BSE"
  },
  {
    name: "NURECA LIMITED",
    isin: "INE0DSF01015",
    token: "543264",
    exchange: "BSE"
  },
  {
    name: "SUUMAYA CORPORATION LIMITED",
    isin: "INE0EMB01015",
    token: "543274",
    exchange: "BSE"
  },
  {
    name: "MANAKSIA LTD",
    isin: "INE015D01022",
    token: "532932",
    exchange: "BSE"
  },
  {
    name: "OMNIPOTENT INDUSTRIES LIMITED",
    isin: "INE0JFE01012",
    token: "543400",
    exchange: "BSE"
  },
  {
    name: "BRAND CONCEPTS LIMITED",
    isin: "INE977Y01011",
    token: "543442",
    exchange: "BSE"
  },
  {
    name: "UMA EXPORTS LIMITED",
    isin: "INE0GIU01018",
    token: "543513",
    exchange: "BSE"
  },
  {
    name: "SUNRISE EFFICIENT MARKETING LI",
    isin: "INE0KPY01017",
    token: "543515",
    exchange: "BSE"
  },
  {
    name: "EIGHTY JEWELLERS LIMITED",
    isin: "INE0KSN01014",
    token: "543518",
    exchange: "BSE"
  },
  {
    name: "SAT INDUSTRIES LTD",
    isin: "INE065D01027",
    token: "511076",
    exchange: "BSE"
  },
  {
    name: "SICAGEN INDIA LTD",
    isin: "INE176J01011",
    token: "533014",
    exchange: "BSE"
  },
  {
    name: "SIMPLEX PAPERS LTD",
    isin: "INE456H01011",
    token: "533019",
    exchange: "BSE"
  },
  {
    name: "USHDEV INTERNATIONAL LTD",
    isin: "INE981D01025",
    token: "511736",
    exchange: "BSE"
  },
  {
    name: "JAIPAN INDUSTRIES LTD",
    isin: "INE058D01030",
    token: "505840",
    exchange: "BSE"
  },
  {
    name: "AASWA TRADING  EXPORTS LTD",
    isin: "INE887D01016",
    token: "512038",
    exchange: "BSE"
  },
  {
    name: "AVIVA INDUSTRIES LTD",
    isin: "INE461H01011",
    token: "512109",
    exchange: "BSE"
  },
  {
    name: "SIGNET INDUSTRIES LIMITED",
    isin: "INE529F01035",
    token: "512131",
    exchange: "BSE"
  },
  {
    name: "ABANS ENTERPRISES LTD",
    isin: "INE365O01010",
    token: "512165",
    exchange: "BSE"
  },
  {
    name: "VERITAS INDIA LTD",
    isin: "INE379J01029",
    token: "512229",
    exchange: "BSE"
  },
  {
    name: "SHREE GLOBAL TRADEFIN LTD",
    isin: "INE080I01025",
    token: "512463",
    exchange: "BSE"
  },
  {
    name: "STATE TRADING CORPORATION OF I",
    isin: "INE655A01013",
    token: "512531",
    exchange: "BSE"
  },
  {
    name: "ADANI WILMAR LIMITED",
    isin: "INE423A01024",
    token: "512599",
    exchange: "BSE"
  },
  {
    name: "AMFORGE INDUSTRIES LTD",
    isin: "INE991A01020",
    token: "513117",
    exchange: "BSE"
  },
  {
    name: "IMEC SERVICES LIMITED",
    isin: "INE611C01012",
    token: "513295",
    exchange: "BSE"
  },
  {
    name: "MMTC LTD",
    isin: "INE123F01029",
    token: "513377",
    exchange: "BSE"
  },
  {
    name: "SOLID STONE COMPANY LTD",
    isin: "INE584G01012",
    token: "513699",
    exchange: "BSE"
  },
  {
    name: "BLACK ROSE INDUSTRIES LTD",
    isin: "INE761G01016",
    token: "514183",
    exchange: "BSE"
  },
  {
    name: "GUJARAT COTEX LTD",
    isin: "INE004C01028",
    token: "514386",
    exchange: "BSE"
  },
  {
    name: "ATLAS JEWELLERY INDIA LIMITED",
    isin: "INE022N01019",
    token: "514394",
    exchange: "BSE"
  },
  {
    name: "RAMASIGNS INDUSTRIES LIMITED",
    isin: "INE650D01026",
    token: "515127",
    exchange: "BSE"
  },
  {
    name: "JLMORISON INDIA LTD",
    isin: "INE430D01015",
    token: "506522",
    exchange: "BSE"
  },
  {
    name: "PAE LTD",
    isin: "INE766A01018",
    token: "517230",
    exchange: "BSE"
  },
  {
    name: "NARBADA GEMS AND JEWELLERY LTD",
    isin: "INE540C01021",
    token: "519455",
    exchange: "BSE"
  },
  {
    name: "TAI INDUSTRIES LTD",
    isin: "INE358D01018",
    token: "519483",
    exchange: "BSE"
  },
  {
    name: "ASIAN TEA  EXPORTS LTD",
    isin: "INE822B01017",
    token: "519532",
    exchange: "BSE"
  },
  {
    name: "OMAX AUTOS LTD",
    isin: "INE090B01011",
    token: "520021",
    exchange: "BSE"
  },
  {
    name: "SHIVA SUITINGS LTD",
    isin: "INE02Z901011",
    token: "521003",
    exchange: "BSE"
  },
  {
    name: "DHANALAXMI ROTO SPINNERS LTD",
    isin: "INE220C01012",
    token: "521216",
    exchange: "BSE"
  },
  {
    name: "UNIVERSAL OFFICE AUTOMATION LT",
    isin: "INE951C01012",
    token: "523519",
    exchange: "BSE"
  },
  {
    name: "VINYL CHEMICALS INDIA LTD",
    isin: "INE250B01029",
    token: "524129",
    exchange: "BSE"
  }
];