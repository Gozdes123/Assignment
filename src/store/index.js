import { createStore } from "vuex";

export default createStore({
  state: {
    data: {
      launches: [
        {
          mission_name: "Thaicom 6",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2014-01-06T14:06:00-04:00",
        },
        {
          mission_name: "AsiaSat 6",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2014-09-07T01:00:00-04:00",
        },
        {
          mission_name: "OG-2 Mission 2",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2015-12-22T21:29:00-04:00",
        },
        {
          mission_name: "FalconSat",
          rocket: {
            rocket_name: "Falcon 1",
            rocket_type: "Merlin A",
          },
          launch_date_local: "2006-03-25T10:30:00+12:00",
        },
        {
          mission_name: "CRS-1",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.0",
          },
          launch_date_local: "2012-10-08T20:35:00-04:00",
        },
        {
          mission_name: "CASSIOPE",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2013-09-29T09:00:00-07:00",
        },
        {
          mission_name: "ABS-3A / Eutelsat 115W B",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2015-03-02T23:50:00-04:00",
        },
        {
          mission_name: "COTS 1",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.0",
          },
          launch_date_local: "2010-12-08T11:43:00-04:00",
        },
        {
          mission_name: "TürkmenÄlem 52°E / MonacoSAT",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2015-04-27T19:03:00-04:00",
        },
        {
          mission_name: "CRS-11",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-06-03T17:07:00-04:00",
        },
        {
          mission_name: "Iridium NEXT Mission 1",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-01-14T10:54:00-07:00",
        },
        {
          mission_name: "CRS-7",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2015-06-28T10:21:00-04:00",
        },
        {
          mission_name: "CRS-4",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2014-09-21T01:52:00-04:00",
        },
        {
          mission_name: "CRS-12",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-08-14T12:31:00-04:00",
        },
        {
          mission_name: "CRS-14",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-04-02T16:30:41-04:00",
        },
        {
          mission_name: "Falcon Heavy Test Flight",
          rocket: {
            rocket_name: "Falcon Heavy",
            rocket_type: "FT",
          },
          launch_date_local: "2018-02-06T15:45:00-05:00",
        },
        {
          mission_name: "CRS-6",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2015-04-14T16:10:00-04:00",
        },
        {
          mission_name: "Jason 3",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2016-01-17T08:42:00-07:00",
        },
        {
          mission_name: "Paz / Starlink Demo",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-02-22T06:17:00-08:00",
        },
        {
          mission_name: "SES-10",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-03-30T18:27:00-04:00",
        },
        {
          mission_name: "Intelsat 35e",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-07-05T19:35:00-04:00",
        },
        {
          mission_name: "SES-12",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-06-04T00:45:00-04:00",
        },
        {
          mission_name: "RatSat",
          rocket: {
            rocket_name: "Falcon 1",
            rocket_type: "Merlin C",
          },
          launch_date_local: "2008-09-28T11:15:00+12:00",
        },
        {
          mission_name: "CRS-9",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2016-07-18T00:45:00-04:00",
        },
        {
          mission_name: "Inmarsat-5 F4",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-05-15T19:21:00-04:00",
        },
        {
          mission_name: "BulgariaSat-1",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-06-23T15:10:00-04:00",
        },
        {
          mission_name: "Hispasat 30W-6",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-03-06T00:33:00-05:00",
        },
        {
          mission_name: "SES-16 / GovSat-1",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-01-31T16:25:00-05:00",
        },
        {
          mission_name: "Iridium NEXT Mission 6",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-05-22T12:47:58-08:00",
        },
        {
          mission_name: "CRS-2",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.0",
          },
          launch_date_local: "2013-03-01T15:10:00-04:00",
        },
        {
          mission_name: "RazakSat",
          rocket: {
            rocket_name: "Falcon 1",
            rocket_type: "Merlin C",
          },
          launch_date_local: "2009-07-13T15:35:00+12:00",
        },
        {
          mission_name: "Falcon 9 Test Flight",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.0",
          },
          launch_date_local: "2010-06-04T14:45:00-04:00",
        },
        {
          mission_name: "NROL-76",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-05-01T07:15:00-04:00",
        },
        {
          mission_name: "Iridium NEXT Mission 5",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-03-30T07:13:51-08:00",
        },
        {
          mission_name: "TESS",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-04-18T18:51:00-04:00",
        },
        {
          mission_name: "CRS-5",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2015-01-10T05:47:00-04:00",
        },
        {
          mission_name: "SES-9",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2016-03-04T19:35:00-04:00",
        },
        {
          mission_name: "CRS-3",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2014-04-18T15:25:00-04:00",
        },
        {
          mission_name: "DSCOVR",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2015-02-11T19:03:00-04:00",
        },
        {
          mission_name: "JCSAT-16",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2016-08-14T01:26:00-04:00",
        },
        {
          mission_name: "FormoSat-5",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-08-24T11:50:00-07:00",
        },
        {
          mission_name: "SES-8",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2013-12-03T18:41:00-04:00",
        },
        {
          mission_name: "OG-2 Mission 1",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2014-07-14T11:15:00-04:00",
        },
        {
          mission_name: "CRS-10",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-02-19T10:39:00-04:00",
        },
        {
          mission_name: "Boeing X-37B OTV-5",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-09-07T09:50:00-04:00",
        },
        {
          mission_name: "Iridium NEXT Mission 3",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-10-09T05:37:00-07:00",
        },
        {
          mission_name: "DemoSat",
          rocket: {
            rocket_name: "Falcon 1",
            rocket_type: "Merlin A",
          },
          launch_date_local: "2007-03-21T13:10:00+12:00",
        },
        {
          mission_name: "JCSAT-2B",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2016-05-06T01:21:00-04:00",
        },
        {
          mission_name: "EchoStar 23",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-03-16T02:00:00-04:00",
        },
        {
          mission_name: "ZUMA",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-01-07T20:00:00-05:00",
        },
        {
          mission_name: "Thaicom 8",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2016-05-27T17:39:00-04:00",
        },
        {
          mission_name: "Amos-6",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2016-09-01T09:07:00-04:00",
        },
        {
          mission_name: "Iridium NEXT Mission 2",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-06-25T13:25:00-07:00",
        },
        {
          mission_name: "SES-11 / Echostar 105",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-10-11T18:53:00-04:00",
        },
        {
          mission_name: "CRS-8",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2016-04-08T16:43:00-04:00",
        },
        {
          mission_name: "ABS-2A / Eutelsat 117W B",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2016-06-15T10:29:00-04:00",
        },
        {
          mission_name: "Telstar 19V",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-07-22T01:50:00-04:00",
        },
        {
          mission_name: "Trailblazer",
          rocket: {
            rocket_name: "Falcon 1",
            rocket_type: "Merlin C",
          },
          launch_date_local: "2008-08-03T15:34:00+12:00",
        },
        {
          mission_name: "COTS 2",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.0",
          },
          launch_date_local: "2012-05-22T03:44:00-04:00",
        },
        {
          mission_name: "AsiaSat 8",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "v1.1",
          },
          launch_date_local: "2014-08-05T04:00:00-04:00",
        },
        {
          mission_name: "KoreaSat 5A",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-10-30T15:34:00-04:00",
        },
        {
          mission_name: "CRS-13",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-12-15T10:36:00-05:00",
        },
        {
          mission_name: "Iridium NEXT Mission 4",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2017-12-22T17:27:23-08:00",
        },
        {
          mission_name: "Bangabandhu-1",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-05-11T16:14:00-04:00",
        },
        {
          mission_name: "Iridium NEXT Mission 7",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-07-25T04:39:26-07:00",
        },
        {
          mission_name: "Nusantara Satu (PSN-6) / S5 / Beresheet",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2019-02-21T20:45:00-05:00",
        },
        {
          mission_name: "Merah Putih",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-08-07T01:18:00-04:00",
        },
        {
          mission_name: "Amos-17",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2019-08-06T18:52:00-04:00",
        },
        {
          mission_name: "SAOCOM 1A",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-10-07T19:22:00-07:00",
        },
        {
          mission_name: "Iridium NEXT Mission 8",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2019-01-11T07:31:00-08:00",
        },
        {
          mission_name: "RADARSAT Constellation",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2019-06-12T07:17:00-07:00",
        },
        {
          mission_name: "GPS III SV03 (Columbus)",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-06-30T15:55:00-04:00",
        },
        {
          mission_name: "SSO-A",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-12-03T10:34:00-08:00",
        },
        {
          mission_name: "Telstar 18V",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-09-10T00:45:00-04:00",
        },
        {
          mission_name: "CRS-19",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2019-12-05T12:29:23-05:00",
        },
        {
          mission_name: "CCtCap Demo Mission 1",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2019-03-02T02:45:00-05:00",
        },
        {
          mission_name: "STP-2",
          rocket: {
            rocket_name: "Falcon Heavy",
            rocket_type: "FT",
          },
          launch_date_local: "2019-06-24T23:30:00-04:00",
        },
        {
          mission_name: "CRS-16",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-12-05T13:16:00-05:00",
        },
        {
          mission_name: "CRS-15",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-06-29T05:42:00-04:00",
        },
        {
          mission_name: "CRS-17",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2019-05-04T02:48:00-04:00",
        },
        {
          mission_name: "CCtCap Demo Mission 2",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-05-30T15:22:00-04:00",
        },
        {
          mission_name: "Crew Dragon In Flight Abort Test",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-01-19T09:00:00-05:00",
        },
        {
          mission_name: "ArabSat 6A",
          rocket: {
            rocket_name: "Falcon Heavy",
            rocket_type: "FT",
          },
          launch_date_local: "2019-04-11T18:35:00-04:00",
        },
        {
          mission_name: "GPS III SV01",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-12-23T08:51:00-05:00",
        },
        {
          mission_name: "SAOCOM 1B, GNOMES-1, Tyvak-0172",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-08-30T19:18:00-04:00",
        },
        {
          mission_name: "Es’hail 2",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2018-11-15T15:46:00-05:00",
        },
        {
          mission_name: "CRS-18",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2019-07-25T18:01:00-04:00",
        },
        {
          mission_name: "JCSat 18 / Kacific 1",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2019-12-16T19:10:00-05:00",
        },
        {
          mission_name: "Starlink v0.9",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2019-05-23T22:30:00-04:00",
        },
        {
          mission_name: "Starlink 1",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2019-11-11T09:56:00-05:00",
        },
        {
          mission_name: "Starlink 2",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-01-06T21:19:00-05:00",
        },
        {
          mission_name: "CRS-20",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-03-06T23:50:31-05:00",
        },
        {
          mission_name: "GPS III SV04 (Sacagawea)",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-11-05T18:24:00-05:00",
        },
        {
          mission_name: "ANASIS-II",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-07-20T17:30:00-04:00",
        },
        {
          mission_name: "Starlink 3",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-01-29T09:06:00-05:00",
        },
        {
          mission_name: "Starlink 4",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-02-17T10:05:55-05:00",
        },
        {
          mission_name: "Starlink 5",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-03-18T08:16:00-04:00",
        },
        {
          mission_name: "Starlink 6",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-04-22T15:30:00-04:00",
        },
        {
          mission_name: "Starlink 7",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-06-03T21:25:00-04:00",
        },
        {
          mission_name: "Starlink-8 & SkySat 16-18",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-06-13T05:21:00-04:00",
        },
        {
          mission_name: "Starlink-9 (v1.0) & BlackSky Global 5-6",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-08-07T01:12:00-04:00",
        },
        {
          mission_name: "Starlink-10 (v1.0) & SkySat 19-21",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-08-18T10:31:00-04:00",
        },
        {
          mission_name: "Starlink-11 (v1.0)",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-09-03T08:46:00-04:00",
        },
        {
          mission_name: "Starlink-12 (v1.0)",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-10-06T07:29:00-04:00",
        },
        {
          mission_name: "Starlink-13 (v1.0)",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-10-18T08:25:00-04:00",
        },
        {
          mission_name: "Starlink-14 (v1.0)",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-10-24T11:31:00-04:00",
        },
        {
          mission_name: "Crew-1",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-11-15T19:27:00-05:00",
        },
        {
          mission_name: "Sentinel-6 Michael Freilich",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-11-21T09:17:00-08:00",
        },
        {
          mission_name: "CRS-21",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-12-06T11:17:00-05:00",
        },
        {
          mission_name: "SXM-7",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-12-13T12:30:00-05:00",
        },
        {
          mission_name: "Starlink-15 (v1.0)",
          rocket: {
            rocket_name: "Falcon 9",
            rocket_type: "FT",
          },
          launch_date_local: "2020-10-24T11:31:00-04:00",
        },
      ],
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
