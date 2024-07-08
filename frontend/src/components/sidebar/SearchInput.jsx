import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchInput) return;

    if (searchInput.length < 3) {
      return toast.error("Search query must be at least 3 characters long");
    }

    const conversation = conversations.find((conv) => conv.name.toLowerCase() === searchInput.toLowerCase());

    if (conversation) {
      setSelectedConversation(conversation);
      setSearchInput("");
    } else {
      toast.error("No conversation found");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-gray-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
