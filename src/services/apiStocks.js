import supabase from "./supabase";

export async function getStocks() {
  let { data: stocks, error } = await supabase.from("stocks").select("*");
  if (error) {
    throw new Error("There is problem fetching data");
  }

  console.log(stocks);
  return stocks;
}

export async function addStockApi(stock) {
  const { data, error } = await supabase
    .from("stocks")
    .insert([stock])
    .select();

  return data;
}

export async function editStockApi({ newStock }) {
  console.log(newStock);
  console.log("Updating stock with ID:", newStock.id);
  console.log("New stock data:", newStock);

  if (newStock?.id) {
    const { data, error } = await supabase
      .from("stocks")
      .update(newStock) // Use stockData directly in the update operation
      .eq("id", newStock?.id)
      .select();

    if (error) {
      console.error("Error updating stock:", error.message);
      throw new Error("Failed to update stock");
    }
    return data;
  } else console.log("Error che");
}

// const { data, error } = await supabase
//   .from("stocks")
//   .update({ other_column: "otherValue" })
//   .eq("some_column", "someValue")
//   .select();

// let query = supabase.from("stocks");

// //Create stock if there is no id
// if (!id) query = query.insert([stock]).select();

// //Upadate stock if there is id
// if (id) query = query.update({ stock }).eq("id", id).select();

// const { data, error } = await supabase.select().single();

// if (error) throw new Error("Stocks cannot be created");
// return data;

export async function deleteStockApi(id) {
  const { error } = await supabase.from("stocks").delete().eq("id", id);
}
