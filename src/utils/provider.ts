import { createClient,  } from "@supabase/supabase-js";
import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'

export default async function Savings() {
  const supabase = createClient( process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
  const { data } = await supabase.from("savings").select();
  type CountriesWithCities = QueryData<typeof data>;
  const response : CountriesWithCities = data;
  return response ;
}