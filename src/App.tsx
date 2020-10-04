import React from "react";

import { dateTimeServiceStats } from "./performance-service/performance-service";
import { LuxonService } from "./date-time-services/luxon-service";
import { DateFnsService } from "./date-time-services/date-fns-service";
import { DayJsService } from "./date-time-services/day-js-service";
import { JsJodaService } from "./date-time-services/js-joda-service";
import { MomentService } from "./date-time-services/moment-service";

function App() {
  React.useEffect(() => {
    const luxonStats = dateTimeServiceStats(LuxonService);
    console.log({ luxonStats });

    const dateFnsStats = dateTimeServiceStats(DateFnsService);
    console.log({ dateFnsStats });

    const dayJsStats = dateTimeServiceStats(DayJsService);
    console.log({ dayJsStats });

    const jsJodaStats = dateTimeServiceStats(JsJodaService);
    console.log({ jsJodaStats });

    const momentStats = dateTimeServiceStats(MomentService);
    console.log({ momentStats });
  }, []);

  return (
    <div>
      DateTime libraries - see performance test results in DevTools(Console)
    </div>
  );
}

export default App;
