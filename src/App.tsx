import React from "react";

import { dateTimeServiceStats } from "./performance-service/performance-service";
import { LuxonService } from "./performance-service/luxon-service";
import { DateFnsService } from "./performance-service/date-fns-service";
import { DayJsService } from "./performance-service/day-js-service";
import { JsJodaService } from "./performance-service/js-joda-service";
import { MomentService } from "./performance-service/moment-service";

function App() {
  React.useEffect(() => {
    const luxonStats = dateTimeServiceStats(LuxonService);
    console.log({ luxonStats });

    // const dateFnsStats = dateTimeServiceStats(DateFnsService);
    // console.log({ dateFnsStats });

    // const dayJsStats = dateTimeServiceStats(DayJsService);
    // console.log({ dayJsStats });

    // const jsJodaStats = dateTimeServiceStats(JsJodaService);
    // console.log({ jsJodaStats });

    // const momentStats = dateTimeServiceStats(MomentService);
    // console.log({ momentStats });
  }, []);

  return <div>LUXON</div>;
}

export default App;
