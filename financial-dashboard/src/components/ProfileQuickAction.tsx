export default function ProfileQuickAction() {
  return (
    <div className="flex gap-2 w-full pt-2 justify-center">
      <button className="h-12 w-12 rounded-full bg-slate-900 hover:bg-slate-800 p-3 flex items-center justify-center">
        <img src="/assets/chats.svg" alt="chat" />
      </button>
      <button className="h-12 w-12 rounded-full bg-slate-900 hover:bg-slate-800 p-3 flex items-center justify-center">
        <img src="/assets/notification.svg" alt="notifications" />
      </button>
      <button className="h-12 w-12 rounded-full bg-slate-900 p-3 hover:bg-slate-800 flex items-center justify-center">
        <img src="/assets/edit.svg" alt="edit profile" />
      </button>
    </div>
  );
}
