import ItemList from "./item-list";
export default function Page() {
    return (
      <main className="p-2">
        <p className="text-3xl font-bold mb-4">Shopping List</p>
        <ItemList />
      </main>
    );
  }