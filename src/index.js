import "./styles.css";
import _ from "lodash";

document.getElementById("app").innerHTML = `
<h1>Using Lodash</h1>
`;

const arr = [1, 2, 3, 4, 5, 6];
const refinedArr = _.map(arr, f => f * 2);
console.log("refinedArr", refinedArr);

const users = [
  { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

const user = _.find(users, { lastName: "Doe", gender: "male" });
console.log(user);

const bar = { foo: { key: "foo" } };
_.set(bar, "foo.items[0]", "An item");
console.log("bar", bar);

const testObject = { a: [{ b: { c: 3 } }] };
let res = _.get(testObject, "a[0].b.c");
console.log("result", res);

let positionRecords = [
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "214-696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "P O BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237,
        std_line_1: "PO BOX 12388"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225"
      },
      contact: {
        external_contact_id: "752168",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "214-696-2133",
        start_date: 1298937600000,
        title_text: "PRESIDENT"
      },
      source_info: {
        source: "O",
        form_year: 2008,
        update_frequency: "QUARTERLY",
        external_record_id: "172499",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 1.2910669e7, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "B732A0AD1927FA7782F5CA4C2B5D8005",
      start_ts: 1298937600000,
      record_key: "76B323003FC8989627632F0C9641AFA3",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632247,
      end_ts: 1306800000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      org: {
        naics_codes: [
          { text: "Record Production and Distribution", value: "512250" }
        ],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2147448800",
        sic_codes: ["73891100"],
        org_id: 20402573,
        duns: "118463640",
        org_name: "HDNET LLC",
        last_update_date: 20171112
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1972",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        msa_code: "2153",
        src_postal_code4: "1972",
        std_house_num: "320",
        std_street_suffix: "ST",
        std_street_name: "WALTON",
        src_city: "DALLAS",
        src_line_1: "320 S WALTON ST",
        std_state: "TX",
        std_addr_id: 309009522,
        std_line_1: "320 S WALTON ST",
        std_pre_direction: "S",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      contact: {
        gender: "M",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 20402573,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "118463640"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "F6H4",
        company_phone_num: "2147448800",
        email: "TIFFANY@HD.NET",
        ceo_flag: false,
        exec_flag: false,
        title_text: "ASSISTANT VICE PRESIDENT HUMAN RESOURCES",
        cont_flag: false
      },
      source_info: {
        update_frequency: "MONTHLY",
        external_record_id: "374922338",
        src_type: "DNB"
      },
      status: "A",
      org_stats: {
        total_employees: 11,
        revenue: 846719.0,
        start_year: 2001,
        employees_at_location: 11
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "EC5D06F757152352DA357FB26F2865C7",
      start_ts: 1562256925307,
      record_key: "F9EE18C242434DDD1E637E18F0D0B9F9",
      history_flag: false,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256925307
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "20171025",
      org: {
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "214-658-7174",
        org_id: 6226624,
        duns: "037460672",
        org_name: "DALLAS BASKETBALL LIMITED",
        last_update_date: 20180222
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1909",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        src_raw_full_address:
          "2909 TAYLOR ST DALLAS TX 75226 1909 UNITED STATES",
        src_postal_code4: "1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR ST",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR ST"
      },
      contact: {
        external_contact_id: "4443317",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "O",
        mrc_code: "A0A1",
        company_phone_num: "214-658-7174",
        fax: "214-658-7121",
        last_updated: 20180222,
        title_start_date: 20150218,
        title_text: "OWNER"
      },
      source_info: {
        update_frequency: "WEEKLY",
        external_record_id: "44433",
        src_type: "HVR",
        last_update_ts: 1519257600000
      },
      record_timestamp: 1508889600000,
      status: "A"
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "0583D29DC37003B852E79A2BD701F958",
      start_ts: 1508889600000,
      record_key: "9DCB12FB12640A561D83925EBDCC50A7",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257435752,
      end_ts: 1437523200000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201712",
      org: {
        naics_codes: [{ text: "Television Broadcasting", value: "515120" }],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2146983800",
        sic_codes: ["483300009901"],
        org_id: 121331089,
        duns: "079205276",
        org_name: "AXS TV LLC",
        last_update_date: 20171112
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1972",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        msa_code: "2153",
        src_postal_code4: "1972",
        std_house_num: "320",
        std_street_suffix: "ST",
        std_street_name: "WALTON",
        src_city: "DALLAS",
        src_line_1: "320 S WALTON ST",
        std_state: "TX",
        std_addr_id: 309009522,
        std_line_1: "320 S WALTON ST",
        std_pre_direction: "S",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 121331089,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "079205276"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1CW",
        company_phone_num: "2146983800",
        email: "MCUBAN@AXS.TV",
        ceo_flag: true,
        exec_flag: true,
        title_text: "CHIEF EXECUTIVE OFFICER",
        cont_flag: true
      },
      source_info: {
        ceo_flag: "C",
        confidence_code: "4",
        mrc_code_cont: "A1A7",
        update_frequency: "MONTHLY",
        external_record_id: "360448146",
        src_type: "DNB",
        history_date: "2016-11-30",
        title_cont: "CHIEF EXECUTIVE OFFICER"
      },
      status: "A",
      org_stats: {
        total_employees: 13,
        revenue: 654842.0,
        start_year: 2013,
        employees_at_location: 13
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "02429DBC85DB8370A52F6330478BD8D7",
      start_ts: 1512086400000,
      record_key: "EF62CEFC23E9459436349AB2E8D37116",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256924041,
      end_ts: 1480464000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201507",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION"
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1435708800000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2014,
        update_frequency: "QUARTERLY",
        external_record_id: "1779742",
        src_type: "GS-PF"
      },
      record_timestamp: 1435708800000,
      status: "A",
      org_stats: { assets: 2119563.0, start_year: 20160203 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1435708800000,
      record_key: "8C423B4E14C0238174CE998A5408E7FB",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632126,
      end_ts: 1467244800000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 747-6287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        external_contact_id: "2232039",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "(214) 747-6287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2008,
        update_frequency: "QUARTERLY",
        external_record_id: "102328222",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 2206580.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1298937600000,
      record_key: "AFFE318B1A95A3B44AFABF0CFF1816E6",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257633043,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-9287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      contact: {
        external_contact_id: "1207368",
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-9287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2004,
        update_frequency: "QUARTERLY",
        external_record_id: "101438433",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 572725.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1298937600000,
      record_key: "24AEA41B20B31024712040A1B47122AF",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970718,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201407",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        external_contact_id: "113870",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1404172800000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2013,
        update_frequency: "QUARTERLY",
        external_record_id: "1334753",
        src_type: "GS-PF"
      },
      record_timestamp: 1404172800000,
      status: "A",
      org_stats: { assets: 2158264.0, start_year: 20140724 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1404172800000,
      record_key: "F0CC292F59B10E6F0E28F31CB2F01486",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632581,
      end_ts: 1467244800000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "20171025",
      org: {
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "310-309-5701",
        org_id: 2931490,
        duns: "807794099",
        org_name: "2929 ENTERTAINMENT LP",
        last_update_date: 20180222
      },
      org_address: {
        std_city: "SANTA MONICA",
        std_postal_code4: "4030",
        src_state: "CA",
        src_postal_code: "90404",
        std_unit_prefix: "STE",
        std_postal_code: "90404",
        src_raw_full_address:
          "2425 OLYMPIC BLVD STE 6040W SANTA MONICA CA 90404 4030 UNITED STATES",
        src_postal_code4: "4030",
        std_house_num: "2425",
        std_street_suffix: "BLVD",
        std_street_name: "OLYMPIC",
        src_city: "SANTA MONICA",
        src_line_1: "2425 OLYMPIC BLVD STE 6040W",
        std_state: "CA",
        std_addr_id: 318603018,
        std_line_1: "2425 OLYMPIC BLVD",
        std_line_2: "STE 6040W",
        std_unit_num: "6040W"
      },
      contact: {
        external_contact_id: "4443317",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "O",
        mrc_code: "A0AQ",
        company_phone_num: "310-309-5701",
        last_updated: 20180222,
        title_start_date: 20150218,
        title_text:
          "CO-OWNER, THE WAGNER/CUBAN COMPANIES &AMP; CO-FOUNDER, HDNET"
      },
      source_info: {
        update_frequency: "WEEKLY",
        external_record_id: "121243",
        src_type: "HVR",
        last_update_ts: 1519257600000
      },
      record_timestamp: 1508889600000,
      status: "A"
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "2CF06313C379AC0CE49B570ACA71514E",
      start_ts: 1508889600000,
      record_key: "350342A48F53C68394BC202B3B376B21",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257436139,
      end_ts: 1437523200000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "P O BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237,
        std_line_1: "PO BOX 12388"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225"
      },
      contact: {
        external_contact_id: "1770001",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "(214) 696-2133",
        start_date: 1298937600000,
        title_text: "PRESIDENT"
      },
      source_info: {
        source: "O",
        form_year: 2005,
        update_frequency: "QUARTERLY",
        external_record_id: "101644410",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 2353855.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "B732A0AD1927FA7782F5CA4C2B5D8005",
      start_ts: 1298937600000,
      record_key: "5630B1AE4BE2EB7FDF187C025B56E4C4",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632652,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201707",
      org: {
        org_type: "NP",
        main_phone_num: "2146962133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION"
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "PO BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "2146962133",
        start_date: 1498867200000,
        title_text: "PRESIDENT"
      },
      source_info: {
        source: "O",
        form_year: 2015,
        update_frequency: "QUARTERLY",
        external_record_id: "2584985",
        src_type: "GS-PF"
      },
      record_timestamp: 1498867200000,
      status: "A",
      org_stats: { assets: 2.6112318e7, start_year: 20180102 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "B732A0AD1927FA7782F5CA4C2B5D8005",
      start_ts: 1498867200000,
      record_key: "A392587E43D046A209A4E0330DBF81E7",
      history_flag: false,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257633107
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201712",
      org: {
        naics_codes: [
          {
            text: "Fitness and Recreational Sports Centers",
            value: "713940"
          }
        ],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2145719221",
        sic_codes: ["79970000"],
        org_id: 4128070,
        duns: "147353515",
        org_name: "H D NET",
        last_update_date: 20171112
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1909",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        msa_code: "2153",
        src_postal_code4: "1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR ST",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR ST",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 4128070,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "147353515"
      },
      relationship: {
        type: "EMPLOYEE",
        ceo_flag: true,
        exec_flag: true,
        title_text: "OWNER",
        cont_flag: true
      },
      source_info: {
        ceo_flag: "C",
        confidence_code: "4",
        mrc_code_cont: "A0A1",
        update_frequency: "MONTHLY",
        external_record_id: "353477535",
        src_type: "DNB",
        history_date: "2016-11-30",
        title_cont: "OWNER"
      },
      status: "A",
      org_stats: {
        total_employees: 1,
        revenue: 64508.0,
        start_year: 2005,
        employees_at_location: 1
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "F27551A73150A7D92389D90D2DCC7674",
      start_ts: 1512086400000,
      record_key: "60F656FE686125BD6DFC0B4773E01759",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256923897,
      end_ts: 1480464000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 747-9287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        external_contact_id: "869735",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "(214) 747-9287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2005,
        update_frequency: "QUARTERLY",
        external_record_id: "101517121",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 771927.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1298937600000,
      record_key: "7A1B609E913852D302DA758B8A3F31A7",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632934,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201105",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226-1909",
        std_postal_code: "75226-1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        external_contact_id: "1638665",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1304208000000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2010,
        update_frequency: "QUARTERLY",
        external_record_id: "442200",
        src_type: "GS-PF"
      },
      record_timestamp: 1304208000000,
      status: "A",
      org_stats: { assets: 1852561.0 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1304208000000,
      record_key: "9E68FD911F33D1F91D6E9AAB0CE3A6EA",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632964,
      end_ts: 1395360000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "0606",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "75-2671534",
        ntee_code: "T12",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20130806
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1909",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        src_postal_code4: "1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      contact: {
        external_contact_id: "40061419",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        salary: 0.0,
        mrc_code: "Z699",
        ind_trustee_flag: false,
        key_employee_flag: false,
        last_updated: 20140306,
        exec_flag: false,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        document_id: "-100190533",
        form_year: 2001,
        update_frequency: "QUARTERLY",
        src_type: "GS",
        last_update_ts: 1394064000000
      },
      record_timestamp: -43043443200000,
      status: "A",
      org_stats: {
        revenue: 713148.0,
        assets: 320241.0,
        start_year: 20110429
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: -43043443200000,
      record_key: "566FDCEC27C785C682E57AABD71AE98B",
      history_flag: false,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562258334901
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226-1909",
        std_postal_code: "75226-1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        external_contact_id: "1365428",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2009,
        update_frequency: "QUARTERLY",
        external_record_id: "244109",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 2004843.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1298937600000,
      record_key: "44C4BAE384C90FF6CDB641FDFF702D5B",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632402,
      end_ts: 1306800000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "P O BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237,
        std_line_1: "PO BOX 12388"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225"
      },
      contact: {
        external_contact_id: "1326124",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "(214) 696-2133",
        start_date: 1298937600000,
        title_text: "PRESIDENT"
      },
      source_info: {
        source: "O",
        form_year: 2004,
        update_frequency: "QUARTERLY",
        external_record_id: "101481917",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 1435882.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "B732A0AD1927FA7782F5CA4C2B5D8005",
      start_ts: 1298937600000,
      record_key: "C7DE95A4CF6E7D080EEB5C2FC22285CF",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257633024,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 747-6287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        external_contact_id: "2029180",
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "(214) 747-6287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2007,
        update_frequency: "QUARTERLY",
        external_record_id: "102038707",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 1700596.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1298937600000,
      record_key: "8F9C9E1910631BBB83B7E0385ED0C6A7",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970718,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201710",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION"
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1506816000000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2016,
        update_frequency: "QUARTERLY",
        external_record_id: "3317021",
        src_type: "GS-PF"
      },
      record_timestamp: 1506816000000,
      status: "A",
      org_stats: { assets: 2543434.0, start_year: 20180102 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1506816000000,
      record_key: "1B48D9B7BFC9D40C9B577212E754F251",
      history_flag: false,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970724
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201309",
      org: {
        naics_codes: [
          {
            text: "Office Machinery and Equipment Rental and Leasing",
            value: "532420"
          }
        ],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2147473030",
        sic_codes: ["73770000"],
        org_id: 7400039,
        duns: "004571632",
        org_name: "RADICAL COMPUTING",
        last_update_date: 20131008
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        msa_code: "2153",
        std_house_num: "3030",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "3030 TAYLOR ST",
        std_state: "TX",
        std_addr_id: 94928195,
        std_line_1: "3030 TAYLOR ST",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "3214",
        src_line_1: "8530 JOURDAN WAY",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 92145992,
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_line_1: "8530 JOURDAN WAY",
        src_postal_code4: "3214"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 7400039,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "004571632"
      },
      relationship: {
        type: "EMPLOYEE",
        ceo_flag: false,
        exec_flag: false,
        cont_flag: true
      },
      source_info: {
        ceo_flag: "N",
        confidence_code: "4",
        mrc_code_cont: "Z799",
        update_frequency: "MONTHLY",
        external_record_id: "16146705",
        src_type: "DNB",
        history_date: "2013-11-30",
        title_cont: "MANAGER",
        person_id: "178327548"
      },
      status: "A",
      org_stats: {
        total_employees: 2,
        revenue: 190000.0,
        start_year: 2007,
        employees_at_location: 2
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "224F32011CD558DCEE45AD3BA366D938",
      start_ts: 1377993600000,
      record_key: "61EF2D7A06909A4CCA634F7D94D57255",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256925563,
      end_ts: 1385769600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 747-6287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        external_contact_id: "1495414",
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "(214) 747-6287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2006,
        update_frequency: "QUARTERLY",
        external_record_id: "101716387",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 1292981.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1298937600000,
      record_key: "F20A6BD18FE408CE467F532100D627C3",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970718,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-9287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      contact: {
        external_contact_id: "674593",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-9287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2004,
        update_frequency: "QUARTERLY",
        external_record_id: "101438433",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 572725.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1298937600000,
      record_key: "5FB263FD0FF09D3894455A9E195FD6B5",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632389,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226-1909",
        std_postal_code: "75226-1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        external_contact_id: "1570513",
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2009,
        update_frequency: "QUARTERLY",
        external_record_id: "244109",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 2004843.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1298937600000,
      record_key: "4CFDB4174E760C3F57432B259CDB4A39",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970718,
      end_ts: 1306800000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201105",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226-1909",
        std_postal_code: "75226-1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        external_contact_id: "2057721",
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1304208000000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2010,
        update_frequency: "QUARTERLY",
        external_record_id: "442200",
        src_type: "GS-PF"
      },
      record_timestamp: 1304208000000,
      status: "A",
      org_stats: { assets: 1852561.0 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1304208000000,
      record_key: "30BB806B58D727BAEA4C407B5CF12EF2",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970718,
      end_ts: 1395360000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201712",
      org: {
        naics_codes: [{ text: "Other Airport Operations", value: "488119" }],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2143502112",
        sic_codes: ["45810000"],
        org_id: 109055771,
        duns: "062994408",
        org_name: "AL DODDS AVIATION",
        last_update_date: 20171022
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1614",
        src_state: "TX",
        src_postal_code: "75209",
        std_postal_code: "75209",
        msa_code: "2153",
        src_postal_code4: "1614",
        std_house_num: "8611",
        std_street_suffix: "AVE",
        std_street_name: "LEMMON",
        src_city: "DALLAS",
        src_line_1: "8611 LEMMON AVE",
        std_state: "TX",
        std_addr_id: 309947015,
        std_line_1: "8611 LEMMON AVE",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 109055771,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "062994408"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "B1R2",
        company_phone_num: "2143502112",
        ceo_flag: true,
        exec_flag: true,
        title_text: "PRINCIPAL",
        cont_flag: true
      },
      source_info: {
        ceo_flag: "C",
        confidence_code: "4",
        mrc_code_cont: "B1R2",
        update_frequency: "MONTHLY",
        external_record_id: "364582458",
        src_type: "DNB",
        history_date: "2017-11-30",
        title_cont: "PRINCIPAL"
      },
      status: "A",
      org_stats: {
        total_employees: 2,
        revenue: 106771.0,
        start_year: 2011,
        employees_at_location: 2
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "74755B7701C0307D4BFD9DD26ACA95A1",
      start_ts: 1512086400000,
      record_key: "0A8496580F976C06EC4988179F621646",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256925656,
      end_ts: 1512000000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      org: {
        naics_codes: [{ text: "All Other Support Services", value: "561990" }],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2146162133",
        sic_codes: ["73899999"],
        org_id: 7926119,
        duns: "019657037",
        org_name: "HDNET FIGHTS INC",
        last_update_date: 20111003
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220",
        msa_code: "2153",
        src_postal_code4: "2218",
        std_house_num: "5424",
        std_street_suffix: "AVE",
        std_street_name: "DELOACHE",
        src_city: "DALLAS",
        src_line_1: "5424 DELOACHE AVE",
        std_state: "TX",
        std_addr_id: 318314164,
        std_line_1: "5424 DELOACHE AVE",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 7926119,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "019657037"
      },
      relationship: {
        type: "EMPLOYEE",
        ceo_flag: false,
        exec_flag: true,
        title_text: "PRINCIPAL",
        cont_flag: false
      },
      source_info: {
        update_frequency: "MONTHLY",
        external_record_id: "17197415",
        src_type: "DNB",
        history_date: "2013-09-30",
        person_id: "16622272"
      },
      status: "A",
      org_stats: {
        total_employees: 2,
        revenue: 96000.0,
        employees_at_location: 2
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "76A185D288C09D460F68DDC271EC3269",
      start_ts: 1562256924337,
      record_key: "43E9E2F3A17B26A5CA479E327225BB41",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256924337,
      end_ts: 1380499200000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201311",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226-1909",
        std_postal_code: "75226-1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        external_contact_id: "1295251",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1383264000000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2011,
        update_frequency: "QUARTERLY",
        external_record_id: "716116",
        src_type: "GS-PF"
      },
      record_timestamp: 1383264000000,
      status: "A",
      org_stats: { assets: 1956200.0, start_year: 20131121 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1383264000000,
      record_key: "64B1FE0BC3CC98A11CD6C6D3BD79D8E3",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632363,
      end_ts: 1395360000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201606",
      org: {
        naics_codes: [
          {
            text: "Commercial Printing (except Screen and Books)",
            value: "323111"
          }
        ],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "9035268880",
        sic_codes: ["27590000"],
        org_id: 133116008,
        duns: "079520695",
        org_name_alt: "GAMEFACE COMPANY THE",
        org_name: "GLOBAL SPORT PRODUCTS  LLC",
        last_update_date: 20160718
      },
      org_address: {
        std_city: "CARROLLTON",
        std_postal_code4: "3656",
        src_state: "TX",
        src_postal_code: "75006",
        std_unit_prefix: "STE",
        std_postal_code: "75006",
        msa_code: "1401",
        src_postal_code4: "3656",
        std_house_num: "1625",
        std_street_suffix: "CIR",
        std_street_name: "CRESCENT",
        src_city: "CARROLLTON",
        src_line_1: "1625 CRESCENT CIR STE 112",
        std_state: "TX",
        std_addr_id: 640726553,
        std_line_1: "1625 CRESCENT CIR STE 112",
        std_unit_num: "112",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 133116008,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "079520695"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "XZA1",
        company_phone_num: "9035268880",
        ceo_flag: false,
        exec_flag: false,
        cont_flag: true
      },
      source_info: {
        ceo_flag: "D",
        confidence_code: "4",
        mrc_code_cont: "XZA1",
        update_frequency: "MONTHLY",
        external_record_id: "278984022",
        src_type: "DNB",
        history_date: "2017-11-30",
        title_cont: "MEMBER"
      },
      status: "A",
      org_stats: {
        total_employees: 3,
        revenue: 102000.0,
        start_year: 2007,
        employees_at_location: 3
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "D4D9F652532CE7EC4D310632E97FB355",
      start_ts: 1464739200000,
      record_key: "7152726422F6F0087D3F7BA7A03C78EC",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256926045,
      end_ts: 1512000000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201507",
      org: {
        org_type: "NP",
        main_phone_num: "214-969-1118",
        ein: "26-3770926",
        ntee_code: "W22",
        org_id: 1566789,
        org_name: "BAILOUTSLEUTH COM FOUNDATION, INC",
        last_update_date: 20160920
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_house_num: "5424",
        std_street_suffix: "AVE",
        std_street_name: "DELOACHE",
        src_city: "DALLAS",
        src_line_1: "5424 DELOACHE AVENUE",
        std_state: "TX",
        std_addr_id: 318314164
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-969-1118",
        start_date: 1435708800000,
        last_updated: 20160920,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2014,
        update_frequency: "QUARTERLY",
        external_record_id: "1831231",
        src_type: "GS-PF",
        last_update_ts: 1474329600000
      },
      record_timestamp: 1435708800000,
      status: "A",
      org_stats: { start_year: 20160203 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "6D931509E45C7EC9DE438EEDD585CB86",
      start_ts: 1435708800000,
      record_key: "599820CFA08755BE7CAFAC710D508143",
      history_flag: false,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257633167
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201206",
      org: {
        org_type: "NP",
        main_phone_num: "214-696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "P O BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237,
        std_line_1: "PO BOX 12388"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225"
      },
      contact: {
        external_contact_id: "1799088",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "214-696-2133",
        start_date: 1338508800000,
        title_text: "PRESIDENT"
      },
      source_info: {
        source: "O",
        form_year: 2010,
        update_frequency: "QUARTERLY",
        external_record_id: "606667",
        src_type: "GS-PF"
      },
      record_timestamp: 1338508800000,
      status: "A",
      org_stats: { assets: 1.3309254e7, start_year: 20130322 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "B732A0AD1927FA7782F5CA4C2B5D8005",
      start_ts: 1338508800000,
      record_key: "4AA2BAF5874F3D58FFF82A3118D3E1E8",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257633213,
      end_ts: 1395360000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201712",
      org: {
        naics_codes: [{ text: "Sports Teams and Clubs", value: "711211" }],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2149547955",
        sic_codes: ["79410102"],
        org_id: 115672256,
        duns: "009507967",
        org_name: "MARK CBAN HROES BASKETBALL CTR",
        last_update_date: 20171112
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "2667",
        src_state: "TX",
        src_postal_code: "75216",
        std_postal_code: "75216",
        msa_code: "2153",
        src_postal_code4: "2667",
        std_house_num: "1800",
        std_street_suffix: "RD",
        std_street_name: "BONNIE VIEW",
        src_city: "DALLAS",
        src_line_1: "1800 BONNIE VIEW RD",
        std_state: "TX",
        std_addr_id: 89477362,
        std_line_1: "1800 BONNIE VIEW RD",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 115672256,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "009507967"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A0A1",
        company_phone_num: "2149547955",
        ceo_flag: true,
        exec_flag: true,
        title_text: "OWNER",
        cont_flag: true
      },
      source_info: {
        ceo_flag: "C",
        confidence_code: "4",
        mrc_code_cont: "A0A1",
        update_frequency: "MONTHLY",
        external_record_id: "370704113",
        src_type: "DNB",
        history_date: "2017-11-30",
        title_cont: "OWNER"
      },
      status: "A",
      org_stats: {
        total_employees: 2,
        revenue: 64619.0,
        start_year: 2009,
        employees_at_location: 2
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "F3EF7422D7313E23A165E23327DD03F8",
      start_ts: 1512086400000,
      record_key: "B32B8BBB834D55C0BDC360C351176698",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256924070,
      end_ts: 1512000000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 747-9287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75222",
        std_postal_code: "75222"
      },
      contact: {
        external_contact_id: "1673076",
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "(214) 747-9287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2005,
        update_frequency: "QUARTERLY",
        external_record_id: "101517121",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 771927.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1298937600000,
      record_key: "9D490E21775FA3E818F33D12AEEB7199",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970718,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201407",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        external_contact_id: "113871",
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1404172800000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2013,
        update_frequency: "QUARTERLY",
        external_record_id: "1334753",
        src_type: "GS-PF"
      },
      record_timestamp: 1404172800000,
      status: "A",
      org_stats: { assets: 2158264.0, start_year: 20140724 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1404172800000,
      record_key: "F85BAC4C9B67DB3C713EB3847F524CB9",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970723,
      end_ts: 1467244800000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 747-6287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        external_contact_id: "834031",
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "(214) 747-6287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2008,
        update_frequency: "QUARTERLY",
        external_record_id: "102328222",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 2206580.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1298937600000,
      record_key: "34D5F0F9C55FA29C39369D2CA167E10D",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970718,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201606",
      org: {
        naics_codes: [
          {
            text: "Commercial Printing (except Screen and Books)",
            value: "323111"
          }
        ],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "9035268880",
        sic_codes: ["27590000"],
        org_id: 133116008,
        duns: "079520695",
        org_name_alt: "GAMEFACE COMPANY THE",
        org_name: "GLOBAL SPORT PRODUCTS  LLC",
        last_update_date: 20150915
      },
      org_address: {
        std_city: "TYLER",
        std_postal_code4: "2562",
        src_state: "TX",
        src_postal_code: "75701",
        std_postal_code: "75701",
        msa_code: "8597",
        src_postal_code4: "2562",
        std_house_num: "1530",
        std_street_name: "SOUTHWEST LOOP 323",
        src_city: "TYLER",
        src_line_1: "1530 S SOUTHWEST LOOP 323",
        std_state: "TX",
        std_addr_id: 303835621,
        std_line_1: "1530 S SOUTHWEST LOOP 323",
        std_pre_direction: "S",
        fips_county_code: {
          text: 'No code "fips5_to_county.732"',
          display_name: 'No code "fips5_to_county.732"',
          value: "732"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 133116008,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "079520695"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "XZA1",
        company_phone_num: "9035268880",
        ceo_flag: false,
        exec_flag: false,
        cont_flag: true
      },
      source_info: {
        ceo_flag: "D",
        confidence_code: "4",
        mrc_code_cont: "XZA1",
        update_frequency: "MONTHLY",
        external_record_id: "194862635",
        src_type: "DNB",
        history_date: "2017-11-30",
        title_cont: "MEMBER"
      },
      status: "A",
      org_stats: {
        total_employees: 3,
        revenue: 102000.0,
        start_year: 2007,
        employees_at_location: 3
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "D4D9F652532CE7EC4D310632E97FB355",
      start_ts: 1464739200000,
      record_key: "7E740270C259FE2FD6DF348508A75C37",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256924037,
      end_ts: 1512000000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "P O BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237,
        std_line_1: "PO BOX 12388"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225"
      },
      contact: {
        external_contact_id: "1259983",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "(214) 696-2133",
        start_date: 1298937600000,
        title_text: "PRESIDENT"
      },
      source_info: {
        source: "O",
        form_year: 2007,
        update_frequency: "QUARTERLY",
        external_record_id: "102260543",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 1405838.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "B732A0AD1927FA7782F5CA4C2B5D8005",
      start_ts: 1298937600000,
      record_key: "5B890A976C90375D18E4C3CCAD7C8C83",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632735,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201604",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION"
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1459468800000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2015,
        update_frequency: "QUARTERLY",
        external_record_id: "2088823",
        src_type: "GS-PF"
      },
      record_timestamp: 1459468800000,
      status: "A",
      org_stats: { assets: 2124473.0, start_year: 20160509 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1459468800000,
      record_key: "DB9B2432493CA4350026F6A5FDFEA224",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970723,
      end_ts: 1520294400000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "214-696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "P O BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237,
        std_line_1: "PO BOX 12388"
      },
      contact: {
        external_contact_id: "1629391",
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-696-2133",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2003,
        update_frequency: "QUARTERLY",
        external_record_id: "101288126",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 820168.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "2508B911C62C047F6CDF1F323C9713C7",
      start_ts: 1298937600000,
      record_key: "584F9FAA1B1C816C4951794F9580B868",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970718,
      end_ts: 1398816000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201712",
      org: {
        naics_codes: [{ text: "Sports Teams and Clubs", value: "711211" }],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2146587174",
        sic_codes: ["79410102"],
        org_id: 6226624,
        duns: "037460672",
        org_name_alt: "DALLAS MAVERICKS",
        org_name: "DALLAS BASKETBALL LIMITED",
        last_update_date: 20171109
      },
      secondary_org_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "7497",
        src_line_1: "P O BOX 227497",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 628466327,
        src_postal_code: "75222",
        std_postal_code: "75222",
        std_line_1: "P O BOX 227497",
        src_postal_code4: "7497",
        std_street_name: "PO BOX 227497"
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1909",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        msa_code: "2153",
        src_postal_code4: "1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR ST",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR ST",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "3214",
        src_line_1: "8530 JOURDAN WAY",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 92145992,
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_line_1: "8530 JOURDAN WAY",
        src_postal_code4: "3214"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 6226624,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "037460672"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A0A1",
        company_phone_num: "2146587174",
        direct_phone: "2147476287",
        email: "MARKCUBAN@DALLASMAVS.COM",
        ceo_flag: true,
        exec_flag: true,
        cont_flag: true,
        ownership_value: 2323593.2377
      },
      source_info: {
        ceo_flag: "C",
        mrc_code_cont: "A0AE",
        update_frequency: "MONTHLY",
        external_record_id: "362055998",
        src_type: "DNB",
        history_date: "2013-11-30",
        title_cont: "GENERAL PARTNER"
      },
      status: "A",
      org_stats: {
        total_employees: 120,
        revenue: 1.2828171e7,
        start_year: 2000,
        employees_at_location: 120
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "C51BD4FA3D03586EE6C5D54EB033117A",
      start_ts: 1512086400000,
      record_key: "22D494992B6C340B4E235908B8BE24CC",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256924932,
      end_ts: 1385769600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201507",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION"
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1435708800000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2014,
        update_frequency: "QUARTERLY",
        external_record_id: "1779742",
        src_type: "GS-PF"
      },
      record_timestamp: 1435708800000,
      status: "A",
      org_stats: { assets: 2119563.0, start_year: 20160203 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1435708800000,
      record_key: "AE1122D30BD8BED0AC5AA212597127F0",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970723,
      end_ts: 1467244800000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "P O BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237,
        std_line_1: "PO BOX 12388"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225"
      },
      contact: {
        external_contact_id: "1750245",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "(214) 696-2133",
        start_date: 1298937600000,
        title_text: "PRESIDENT"
      },
      source_info: {
        source: "O",
        form_year: 2006,
        update_frequency: "QUARTERLY",
        external_record_id: "101862212",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 2016075.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "B732A0AD1927FA7782F5CA4C2B5D8005",
      start_ts: 1298937600000,
      record_key: "D4678F2EEBCA3A3765911AF1FD9CCCB1",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632486,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201412",
      org: {
        naics_codes: [{ text: "Sports Teams and Clubs", value: "711211" }],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2146587174",
        sic_codes: ["79410102"],
        org_id: 6226624,
        duns: "037460672",
        org_name_alt: "DALLAS MAVERICKS",
        org_name: "DALLAS BASKETBALL LIMITED",
        last_update_date: 20171109
      },
      secondary_org_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "7497",
        src_line_1: "P O BOX 227497",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 628466327,
        src_postal_code: "75222",
        std_postal_code: "75222",
        std_line_1: "P O BOX 227497",
        src_postal_code4: "7497",
        std_street_name: "PO BOX 227497"
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1909",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        msa_code: "2153",
        src_postal_code4: "1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR ST",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR ST",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "3214",
        src_line_1: "8530 JOURDAN WAY",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 92145992,
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_line_1: "8530 JOURDAN WAY",
        src_postal_code4: "3214"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 6226624,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "037460672"
      },
      relationship: {
        bio: "2000-PRESENT ACTIVE HERE.",
        type: "EMPLOYEE",
        mrc_code: "A0A1",
        company_phone_num: "2146587174",
        direct_phone: "2147476287",
        email: "MARKCUBAN@DALLASMAVS.COM",
        ceo_flag: true,
        exec_flag: true,
        title_text: "GEN PTNR",
        cont_flag: true,
        ownership_value: 2323593.2377
      },
      source_info: {
        ceo_flag: "C",
        mrc_code_cont: "A0AE",
        update_frequency: "MONTHLY",
        external_record_id: "362055998",
        src_type: "DNB",
        history_date: "2013-11-30",
        title_cont: "GENERAL PARTNER",
        person_id: "16622272"
      },
      status: "A",
      org_stats: {
        total_employees: 120,
        revenue: 1.2828171e7,
        start_year: 2000,
        employees_at_location: 120
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "640604F6D84BE9F7318ED4C7FDB83341",
      start_ts: 1417392000000,
      record_key: "163DF0C6D25E32D37AB84856BF4D8D26",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256924931,
      end_ts: 1385769600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201311",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226-1909",
        std_postal_code: "75226-1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        external_contact_id: "1001624",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1383264000000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2012,
        update_frequency: "QUARTERLY",
        external_record_id: "1082621",
        src_type: "GS-PF"
      },
      record_timestamp: 1383264000000,
      status: "A",
      org_stats: { assets: 2159967.0, start_year: 20131121 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1383264000000,
      record_key: "F74E71A0ECF33D9839CFCE45F66DF00D",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632361,
      end_ts: 1428451200000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201311",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226-1909",
        std_postal_code: "75226-1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        external_contact_id: "1001625",
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1383264000000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2012,
        update_frequency: "QUARTERLY",
        external_record_id: "1082621",
        src_type: "GS-PF"
      },
      record_timestamp: 1383264000000,
      status: "A",
      org_stats: { assets: 2159967.0, start_year: 20131121 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1383264000000,
      record_key: "8E0A93DB6D469380D27A3A807F15A14A",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970723,
      end_ts: 1428451200000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201604",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION"
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1459468800000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2015,
        update_frequency: "QUARTERLY",
        external_record_id: "2088823",
        src_type: "GS-PF"
      },
      record_timestamp: 1459468800000,
      status: "A",
      org_stats: { assets: 2124473.0, start_year: 20160509 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1459468800000,
      record_key: "25413C06577CEDACDCA36A2D316D026A",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632672,
      end_ts: 1520294400000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 747-6287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        external_contact_id: "751528",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "(214) 747-6287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2007,
        update_frequency: "QUARTERLY",
        external_record_id: "102038707",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 1700596.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1298937600000,
      record_key: "79C59B9F7AD37AC1EC09019A2EC12118",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257633045,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201710",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION"
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1506816000000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2016,
        update_frequency: "QUARTERLY",
        external_record_id: "3317021",
        src_type: "GS-PF"
      },
      record_timestamp: 1506816000000,
      status: "A",
      org_stats: { assets: 2543434.0, start_year: 20180102 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1506816000000,
      record_key: "7BEFC69B40DDA570B984E1030ECEA04C",
      history_flag: false,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632842
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201403",
      org: {
        naics_codes: [
          {
            text: "All Other Professional, Scientific, and Technical Services",
            value: "541990"
          }
        ],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2146587161",
        sic_codes: ["89990800"],
        org_id: 129231653,
        duns: "042711717",
        org_name: "ICEROCKET COM",
        last_update_date: 20120610
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1909",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        msa_code: "2153",
        src_postal_code4: "1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR ST",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR ST",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        src_master_org_id: "799085266",
        office_org_id: 129231653,
        location_type: "OFFICE",
        subsidiary_flag: true,
        src_office_org_id: "042711717",
        src_parent_org_id: "785161154"
      },
      relationship: {
        type: "EMPLOYEE",
        ceo_flag: true,
        exec_flag: true,
        title_text: "PRINCIPAL",
        cont_flag: true
      },
      source_info: {
        ceo_flag: "C",
        confidence_code: "4",
        mrc_code_cont: "B1R2",
        update_frequency: "MONTHLY",
        external_record_id: "19620347",
        src_type: "DNB",
        history_date: "2014-02-28",
        title_cont: "PRINCIPAL",
        person_id: "16622272"
      },
      status: "A",
      org_stats: {
        total_employees: 0,
        revenue: 0.0,
        start_year: 2011,
        employees_at_location: 0
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "65B65AF230D60465E8B898EDCA09B491",
      start_ts: 1393632000000,
      record_key: "4873E9B972071CDD5002A0E191B406A4",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256924133,
      end_ts: 1393545600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201105",
      org: {
        org_type: "NP",
        main_phone_num: "214-696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "P O BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237,
        std_line_1: "PO BOX 12388"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225"
      },
      contact: {
        external_contact_id: "988567",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "214-696-2133",
        start_date: 1304208000000,
        title_text: "PRESIDENT"
      },
      source_info: {
        source: "O",
        form_year: 2009,
        update_frequency: "QUARTERLY",
        external_record_id: "350422",
        src_type: "GS-PF"
      },
      record_timestamp: 1304208000000,
      status: "A",
      org_stats: { assets: 1.2797845e7 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "B732A0AD1927FA7782F5CA4C2B5D8005",
      start_ts: 1304208000000,
      record_key: "07F00318687461C622A41DF7CBF8C7FD",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632538,
      end_ts: 1364688000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201501",
      org: {
        org_type: "NP",
        main_phone_num: "214-696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "P O BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225"
      },
      contact: {
        external_contact_id: "2351070",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "214-696-2133",
        start_date: 1420070400000,
        title_text: "PRESIDENT"
      },
      source_info: {
        source: "O",
        form_year: 2013,
        update_frequency: "QUARTERLY",
        external_record_id: "1558746",
        src_type: "GS-PF"
      },
      record_timestamp: 1420070400000,
      status: "A",
      org_stats: { assets: 2.7463437e7, start_year: 20150114 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "B732A0AD1927FA7782F5CA4C2B5D8005",
      start_ts: 1420070400000,
      record_key: "F8894A177DD7436590BD93BAFBC220EB",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257633054,
      end_ts: 1467244800000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201712",
      org: {
        naics_codes: [
          { text: "Office Administrative Services", value: "561110" }
        ],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2142658791",
        sic_codes: ["87410000"],
        org_id: 8646918,
        duns: "063126655",
        org_name: "RADICAL MANAGEMENT LLC",
        last_update_date: 20171001
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1908",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        msa_code: "2153",
        src_postal_code4: "1908",
        std_house_num: "2914",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2914 TAYLOR ST",
        std_state: "TX",
        std_addr_id: 94928162,
        std_line_1: "2914 TAYLOR ST",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 8646918,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "063126655"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z799",
        company_phone_num: "2142658791",
        ceo_flag: true,
        exec_flag: true,
        title_text: "MANAGER",
        cont_flag: true
      },
      source_info: {
        ceo_flag: "C",
        confidence_code: "4",
        mrc_code_cont: "Z799",
        update_frequency: "MONTHLY",
        external_record_id: "367677692",
        src_type: "DNB",
        history_date: "2017-11-30",
        title_cont: "MANAGER"
      },
      status: "A",
      org_stats: {
        total_employees: 5,
        revenue: 274958.0,
        start_year: 2001,
        employees_at_location: 5
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "83247B71B7E857FBD38BD5A6E39756AB",
      start_ts: 1512086400000,
      record_key: "6D47D8D708D175F23F3CBAE51CB2CC77",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256925786,
      end_ts: 1512000000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201606",
      org: {
        naics_codes: [
          {
            text: "Commercial Printing (except Screen and Books)",
            value: "323111"
          }
        ],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "9035268880",
        sic_codes: ["27590000"],
        org_id: 133116008,
        duns: "079520695",
        org_name_alt: "GAMEFACE COMPANY THE",
        org_name: "GLOBAL SPORT PRODUCTS  LLC",
        last_update_date: 20160825
      },
      org_address: {
        std_city: "CARROLLTON",
        std_postal_code4: "6446",
        src_state: "TX",
        src_postal_code: "75006",
        std_unit_prefix: "STE",
        std_postal_code: "75006",
        msa_code: "1401",
        src_postal_code4: "6446",
        std_house_num: "1520",
        std_street_suffix: "RD",
        std_street_name: "LUNA",
        src_city: "CARROLLTON",
        src_line_1: "1520 LUNA RD STE 120",
        std_state: "TX",
        std_addr_id: 515334833,
        std_line_1: "1520 LUNA RD STE 120",
        std_unit_num: "120",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 133116008,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "079520695"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "XZA1",
        company_phone_num: "9035268880",
        ceo_flag: false,
        exec_flag: false,
        cont_flag: true
      },
      source_info: {
        ceo_flag: "D",
        confidence_code: "4",
        mrc_code_cont: "XZA1",
        update_frequency: "MONTHLY",
        external_record_id: "360303497",
        src_type: "DNB",
        history_date: "2017-11-30",
        title_cont: "MEMBER"
      },
      status: "A",
      org_stats: {
        total_employees: 3,
        revenue: 102000.0,
        start_year: 2007,
        employees_at_location: 3
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "D4D9F652532CE7EC4D310632E97FB355",
      start_ts: 1464739200000,
      record_key: "AF3EF1FBE22ED432EAE4946A0EBDD9C0",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256926198,
      end_ts: 1512000000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201604",
      org: {
        org_type: "NP",
        main_phone_num: "214-696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION"
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "C/O ROBERT HART, PO BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "214-696-2133",
        start_date: 1459468800000,
        title_text: "PRESIDENT"
      },
      source_info: {
        source: "O",
        form_year: 2014,
        update_frequency: "QUARTERLY",
        external_record_id: "2035626",
        src_type: "GS-PF"
      },
      record_timestamp: 1459468800000,
      status: "A",
      org_stats: { assets: 2.7039388e7, start_year: 20160509 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "B732A0AD1927FA7782F5CA4C2B5D8005",
      start_ts: 1459468800000,
      record_key: "802C713E804F34684275B29934C260ED",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632372,
      end_ts: 1520294400000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201311",
      org: {
        org_type: "NP",
        main_phone_num: "214-747-6287",
        ein: "31-1767408",
        ntee_code: "T22",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226-1909",
        std_postal_code: "75226-1909",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220-2217",
        std_postal_code: "75220-2217"
      },
      contact: {
        external_contact_id: "1295252",
        src_first_name: "TIFFANY",
        std_full_name: "TIFFANY CUBAN",
        src_full_name: "TIFFANY CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "TIFFANY",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "214-747-6287",
        start_date: 1383264000000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2011,
        update_frequency: "QUARTERLY",
        external_record_id: "716116",
        src_type: "GS-PF"
      },
      record_timestamp: 1383264000000,
      status: "A",
      org_stats: { assets: 1956200.0, start_year: 20131121 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "S",
      spouse_id: "133327100",
      entity_id: "4D01B2D2509BC3B5995643B8B5F50E33",
      start_ts: 1383264000000,
      record_key: "75AF8FAE4455B5ABBA996E3937D0A3B2",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562260970718,
      end_ts: 1395360000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201311",
      org: {
        org_type: "NP",
        main_phone_num: "214-696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "P O BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237,
        std_line_1: "PO BOX 12388"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225"
      },
      contact: {
        external_contact_id: "679278",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "214-696-2133",
        start_date: 1383264000000,
        title_text: "PRESIDENT"
      },
      source_info: {
        source: "O",
        form_year: 2011,
        update_frequency: "QUARTERLY",
        external_record_id: "1042432",
        src_type: "GS-PF"
      },
      record_timestamp: 1383264000000,
      status: "A",
      org_stats: { assets: 1.3284957e7, start_year: 20131121 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "B732A0AD1927FA7782F5CA4C2B5D8005",
      start_ts: 1383264000000,
      record_key: "902AF270E531470918263882A28D2165",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257632140,
      end_ts: 1428451200000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "(214) 747-6287",
        ein: "31-1767408",
        ntee_code: "T99",
        org_id: 205386,
        org_name: "DALLAS MAVERICKS FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        std_house_num: "2909",
        std_street_suffix: "ST",
        std_street_name: "TAYLOR",
        src_city: "DALLAS",
        src_line_1: "2909 TAYLOR STREET",
        std_state: "TX",
        std_addr_id: 94928160,
        std_line_1: "2909 TAYLOR STREET"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        src_state: "TX",
        std_state: "TX",
        src_postal_code: "75220",
        std_postal_code: "75220"
      },
      contact: {
        external_contact_id: "2216259",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "Z699",
        company_phone_num: "(214) 747-6287",
        start_date: 1298937600000,
        title_text: "DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2006,
        update_frequency: "QUARTERLY",
        external_record_id: "101716387",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 1292981.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "264565A7AFAD0B76CECF5B7ED92E4477",
      start_ts: 1298937600000,
      record_key: "20A363E0D59B5469DE268EE85BABEEA9",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257633048,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201309",
      org: {
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "8177940032",
        sic_codes: ["59990603"],
        org_id: 18925187,
        duns: "129671413",
        org_name: "G B S"
      },
      org_address: {
        std_city: "MANSFIELD",
        std_postal_code4: "5139",
        src_state: "TX",
        src_postal_code: "76063",
        std_postal_code: "76063",
        src_postal_code4: "5139",
        std_house_num: "2506",
        std_street_suffix: "TRL",
        std_street_name: "HILLARY",
        src_city: "MANSFIELD",
        src_line_1: "2506 HILLARY TRL",
        std_state: "TX",
        std_addr_id: 91841157,
        std_line_1: "2506 HILLARY TRL"
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 18925187,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "129671413"
      },
      relationship: {
        type: "EMPLOYEE",
        ceo_flag: false,
        exec_flag: true,
        title_text: "CHIEF FINANCIAL OFFICER",
        cont_flag: true
      },
      source_info: {
        ceo_flag: "D",
        mrc_code_cont: "A1A9",
        update_frequency: "MONTHLY",
        external_record_id: "51710587",
        src_type: "DNB",
        history_date: "2010-10-31",
        title_cont: "CHIEF FINANCIAL OFFICER",
        person_id: "16622272"
      },
      status: "A",
      org_stats: {
        total_employees: 3,
        revenue: 1000000.0,
        start_year: 1990,
        employees_at_location: 3
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "E5BAB4B89A7FCAEDE613EDF61CAC2B76",
      start_ts: 1377993600000,
      record_key: "8800DC24E66073536E16913967C03B29",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256925356,
      end_ts: 1288483200000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201712",
      org: {
        naics_codes: [
          {
            text: "Other Support Activities for Air Transportation",
            value: "488190"
          }
        ],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2143502112",
        sic_codes: ["45810200"],
        org_id: 12181077,
        duns: "149138302",
        org_name: "PAPALOTE AVIATION",
        last_update_date: 20160420
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1614",
        src_state: "TX",
        src_postal_code: "75209",
        std_postal_code: "75209",
        msa_code: "2153",
        src_postal_code4: "1614",
        std_house_num: "8611",
        std_street_suffix: "AVE",
        std_street_name: "LEMMON",
        src_city: "DALLAS",
        src_line_1: "8611 LEMMON AVE",
        std_state: "TX",
        std_addr_id: 309947015,
        std_line_1: "8611 LEMMON AVE",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 12181077,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "149138302"
      },
      relationship: {
        type: "EMPLOYEE",
        ceo_flag: true,
        exec_flag: true,
        title_text: "PRINCIPAL",
        cont_flag: true
      },
      source_info: {
        ceo_flag: "C",
        confidence_code: "4",
        mrc_code_cont: "B1R2",
        update_frequency: "MONTHLY",
        external_record_id: "374640775",
        src_type: "DNB",
        history_date: "2017-11-30",
        title_cont: "PRINCIPAL"
      },
      status: "A",
      org_stats: {
        total_employees: 2,
        revenue: 106368.0,
        start_year: 2004,
        employees_at_location: 2
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "789E1E9183FEFBE60C8A6C740603631A",
      start_ts: 1512086400000,
      record_key: "1B3C0E76A98FCB65A86584DC4DD12007",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256923961,
      end_ts: 1512000000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "20171206",
      org: {
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "214-744-8800",
        org_id: 20402573,
        duns: "118463640",
        org_name: "HDNET LLC",
        last_update_date: 20180222
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1972",
        src_state: "TX",
        src_postal_code: "75226",
        std_postal_code: "75226",
        src_raw_full_address:
          "320 S WALTON ST DALLAS TX 75226 1972 UNITED STATES",
        src_postal_code4: "1972",
        std_house_num: "320",
        std_street_suffix: "ST",
        std_street_name: "WALTON",
        src_city: "DALLAS",
        src_line_1: "320 S WALTON ST",
        std_state: "TX",
        std_addr_id: 309009522,
        std_line_1: "320 S WALTON ST",
        std_pre_direction: "S"
      },
      contact: {
        external_contact_id: "4443317",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "O",
        mrc_code: "A1BA",
        company_phone_num: "214-744-8800",
        last_updated: 20180222,
        title_start_date: 20150218,
        title_text: "CHAIRMAN AND PRESIDENT"
      },
      source_info: {
        update_frequency: "WEEKLY",
        external_record_id: "132397",
        src_type: "HVR",
        last_update_ts: 1519257600000
      },
      record_timestamp: 1512518400000,
      status: "A"
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "CC876472F3669EA24C238EE0EB571CC4",
      start_ts: 1512518400000,
      record_key: "BA66BF6CD9A6F63CB65BFF37BDF66AB6",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257435759,
      end_ts: 1437523200000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201103",
      org: {
        org_type: "NP",
        main_phone_num: "214-696-2133",
        ein: "26-0063142",
        ntee_code: "T90",
        org_id: 515945,
        org_name: "MARK CUBAN FOUNDATION",
        last_update_date: 20151103
      },
      org_address: {
        std_city: "DALLAS",
        src_state: "TX",
        src_postal_code: "75225",
        std_postal_code: "75225",
        std_street_name: "PO BOX 12388",
        src_city: "DALLAS",
        src_line_1: "P O BOX 12388",
        std_state: "TX",
        std_addr_id: 196621237,
        std_line_1: "PO BOX 12388"
      },
      contact: {
        external_contact_id: "1790114",
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "A1A6",
        company_phone_num: "214-696-2133",
        start_date: 1298937600000,
        title_text: "PRESIDENT/DIRECTOR"
      },
      source_info: {
        source: "O",
        form_year: 2003,
        update_frequency: "QUARTERLY",
        external_record_id: "101288126",
        src_type: "GS-PF"
      },
      record_timestamp: 1298937600000,
      status: "A",
      org_stats: { assets: 820168.0, start_year: 20110429 }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "FD71F3F138EB2FFC2C45EA3308DAEA44",
      start_ts: 1298937600000,
      record_key: "A148D138406CE6F5CC2874C717164C6B",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562257633120,
      end_ts: 1301529600000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201606",
      org: {
        naics_codes: [
          {
            text: "Commercial Printing (except Screen and Books)",
            value: "323111"
          }
        ],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "9035268880",
        sic_codes: ["27590000"],
        org_id: 133116008,
        duns: "079520695",
        org_name_alt: "GAMEFACE COMPANY THE",
        org_name: "GLOBAL SPORT PRODUCTS LLC",
        last_update_date: 20150809
      },
      secondary_org_address: {
        src_city: "TYLER",
        std_city: "TYLER",
        std_postal_code4: "6702",
        src_line_1: "P O BOX 6702",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 284173771,
        src_postal_code: "75711",
        std_postal_code: "75711",
        std_line_1: "P O BOX 6702",
        src_postal_code4: "6702",
        std_street_name: "PO BOX 6702"
      },
      org_address: {
        std_city: "TYLER",
        std_postal_code4: "2562",
        src_state: "TX",
        src_postal_code: "75701",
        std_postal_code: "75701",
        msa_code: "8597",
        src_postal_code4: "2562",
        std_house_num: "1530",
        std_street_name: "SOUTHWEST LOOP 323",
        src_city: "TYLER",
        src_line_1: "1530 S SOUTHWEST LOOP 323",
        std_state: "TX",
        std_addr_id: 303835621,
        std_line_1: "1530 S SOUTHWEST LOOP 323",
        std_pre_direction: "S",
        fips_county_code: {
          text: 'No code "fips5_to_county.732"',
          display_name: 'No code "fips5_to_county.732"',
          value: "732"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 133116008,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "079520695"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "XZA1",
        company_phone_num: "9035268880",
        ceo_flag: false,
        exec_flag: false,
        cont_flag: true
      },
      source_info: {
        ceo_flag: "D",
        confidence_code: "4",
        mrc_code_cont: "XZA1",
        update_frequency: "MONTHLY",
        external_record_id: "194762536",
        src_type: "DNB",
        history_date: "2017-11-30",
        title_cont: "MEMBER"
      },
      status: "A",
      org_stats: {
        total_employees: 3,
        revenue: 102000.0,
        start_year: 2012,
        employees_at_location: 3
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "D4D9F652532CE7EC4D310632E97FB355",
      start_ts: 1464739200000,
      record_key: "D6419F6B4E4AB62F66692B43ED7499C6",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256926341,
      end_ts: 1512000000000
    }
  },
  {
    detailedObjectMap: {
      object_type: "POSITION",
      batch_id: "201712",
      org: {
        naics_codes: [
          { text: "Other Nonscheduled Air Transportation", value: "481219" }
        ],
        public_priv_flag: "P",
        org_type: "B",
        main_phone_num: "2143521175",
        sic_codes: ["45220100"],
        org_id: 3449993,
        duns: "134395776",
        org_name: "RADICAL VENTURES LLC",
        last_update_date: 20171112
      },
      org_address: {
        std_city: "DALLAS",
        std_postal_code4: "1614",
        src_state: "TX",
        src_postal_code: "75209",
        std_postal_code: "75209",
        msa_code: "2153",
        src_postal_code4: "1614",
        std_house_num: "8611",
        std_street_suffix: "AVE",
        std_street_name: "LEMMON",
        src_city: "DALLAS",
        src_line_1: "8611 LEMMON AVE",
        std_state: "TX",
        std_addr_id: 309947015,
        std_line_1: "8611 LEMMON AVE",
        fips_county_code: {
          text: 'No code "fips5_to_county.267"',
          display_name: 'No code "fips5_to_county.267"',
          value: "267"
        },
        fips_state_code: {
          text: 'No code "fips_to_state.85"',
          display_name: 'No code "fips_to_state.85"',
          value: "85"
        }
      },
      home_address: {
        src_city: "DALLAS",
        std_city: "DALLAS",
        std_postal_code4: "2218",
        src_line_1: "5424 DELOACHE AVE",
        src_state: "TX",
        std_state: "TX",
        std_addr_id: 318314164,
        src_postal_code: "75220",
        std_postal_code: "75220",
        std_line_1: "5424 DELOACHE AVE",
        src_postal_code4: "2218"
      },
      contact: {
        src_first_name: "MARK",
        std_full_name: "MARK CUBAN",
        src_birth_year: 0,
        src_full_name: "MARK CUBAN",
        std_last_name: "CUBAN",
        src_prefix: "MR",
        std_first_name: "MARK",
        src_last_name: "CUBAN"
      },
      org_hierarchy: {
        office_org_id: 3449993,
        location_type: "OFFICE",
        subsidiary_flag: false,
        src_office_org_id: "134395776"
      },
      relationship: {
        type: "EMPLOYEE",
        mrc_code: "XZA1",
        company_phone_num: "2143521175",
        ceo_flag: true,
        exec_flag: true,
        title_text: "PRINCIPAL",
        cont_flag: true
      },
      source_info: {
        ceo_flag: "C",
        confidence_code: "4",
        mrc_code_cont: "B1R2",
        update_frequency: "MONTHLY",
        external_record_id: "354630032",
        src_type: "DNB",
        history_date: "2017-11-30",
        title_cont: "PRINCIPAL"
      },
      status: "A",
      org_stats: {
        total_employees: 1,
        revenue: 315571.0,
        start_year: 2000,
        employees_at_location: 1
      }
    },
    link: {
      we_pid: 1797049078,
      object_type: "POSITION",
      relation_type: "I",
      entity_id: "516C94934E305ED19762FB06837C3373",
      start_ts: 1512086400000,
      record_key: "9FEB7F7D08D7145589160E3907672E37",
      history_flag: true,
      verify_flag: false,
      manually_added: false,
      create_ts: 1562256924472,
      end_ts: 1512000000000
    }
  }
];

const getChunks = _.chunk(positionRecords, 20)
// console.log("Chunks", getChunks)

let results = _.groupBy(
  positionRecords,
  ob => ob.detailedObjectMap.source_info.src_type
);
// console.log(JSON.stringify(results));

let countedRecords = _.countBy(
  positionRecords,
  c => c.detailedObjectMap.contact.src_full_name === "MARK CUBAN"
);
// console.log(countedRecords);
// console.log(results["GS-PF"]);
let futureSumRevenue = _.chain(results["GS-PF"])
  .filter(f => f.detailedObjectMap.org_stats.assets)
  .sum()
  .value();
// console.log(futureSumRevenue);
