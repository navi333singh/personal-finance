import {createClient, QueryData,} from "@supabase/supabase-js";

async function Savings() {
  const supabase = createClient( process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
  const { data } = await supabase.from("savings").select();
  type CountriesWithCities = QueryData<typeof data>;
  const response : CountriesWithCities = data;
  return response ;
}

export  async function getUserConfiguration(){
  //fetch(USER_PREFERENCES);
  return {
    "stockView": true,
    "savingView": true,
  };
}