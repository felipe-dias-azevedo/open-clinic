import gi

gi.require_version("Gtk", "3.0")
from gi.repository import Gtk, GLib


class ListBox(Gtk.ListBoxRow):
    def __init__(self, data):
        super(Gtk.ListBoxRow, self).__init__()
        self.data = data
        self.add(Gtk.Label(label=data))


class ViewUsers(Gtk.Window):
    def __init__(self):
        Gtk.Window.__init__(self, title="Users View")
        self.set_size_request(400, 280)
        self.set_default_size(480, 360)
        self.set_border_width(16)
        self.set_position(Gtk.WindowPosition.CENTER)
        self.timeout_id = None

        self.chosen_user = ""

        box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=12)
        self.add(box)
        header_box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=12)
        header_button_box = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=8)
        footer_box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=8)
        footer_button_box = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=6)
        box.pack_start(header_box, False, True, 0)
        header_box.pack_start(header_button_box, True, True, 0)
        box.pack_end(footer_box, False, True, 3)
        footer_box.pack_start(footer_button_box, True, True, 0)

        self.label_name = Gtk.Label()
        self.label_name.set_text("Select a User:")
        self.label_name.set_justify(Gtk.Justification.LEFT)
        header_button_box.pack_start(self.label_name, False, False, 0)

        self.button_close = Gtk.Button(label="Insert User")
        self.button_close.connect("clicked", self.on_create)
        header_button_box.pack_end(self.button_close, False, False, 0)

        self.button_close = Gtk.Button(label="Update User")
        self.button_close.connect("clicked", self.on_update)
        header_button_box.pack_end(self.button_close, False, False, 0)

        self.users_list = Gtk.ListBox()
        items = ["FELIPE", "MARIANA", "RODRIGO", "JAIR", "YOSHI", "CELIA", "KALINE"]
        for item in items:
            self.users_list.add(ListBox(item))
        self.users_list.connect("row-activated", self.on_row_activated)
        box.pack_start(self.users_list, True, True, 0)
        self.users_list.show_all()

        self.button_close = Gtk.Button(label="Log Out")
        self.button_close.connect("clicked", self.on_close_clicked)
        footer_button_box.pack_start(self.button_close, False, False, 0)

        self.button_delete = Gtk.Button(label="Delete User")
        self.button_delete.connect("clicked", self.on_delete)
        footer_button_box.pack_end(self.button_delete, False, False, 0)

        self.button_close = Gtk.Button(label="Refresh")
        self.button_close.connect("clicked", self.on_refresh)
        footer_button_box.pack_end(self.button_close, False, False, 0)

    def on_row_activated(self, listbox_widget, row):
        self.chosen_user = row.data

    def on_update(self, button):
        if self.chosen_user != "":
            print("Change screen to Update")
            self.close()
            import register
            win = register.Register(True, self.chosen_user)
            win.connect("destroy", Gtk.main_quit)
            win.show_all()
            win.show()
            Gtk.main()
        else:
            dialog = Gtk.MessageDialog(
                transient_for=self,
                flags=0,
                message_type=Gtk.MessageType.ERROR,
                buttons=Gtk.ButtonsType.CANCEL,
                text="Error at Updating!",
            )
            dialog.format_secondary_text(
                "Select a User to Update its data."
            )
            dialog.run()

            dialog.destroy()

    def on_create(self, button):
        print("Change screen to Create")
        self.close()
        import register
        win = register.Register(False)
        win.connect("destroy", Gtk.main_quit)
        win.show_all()
        win.show()
        Gtk.main()

    def on_refresh(self, button):
        print("Refresh")
        self.close()
        win = ViewUsers()
        win.connect("destroy", Gtk.main_quit)
        win.show_all()
        win.show()
        Gtk.main()

    def on_delete(self, button):
        print("Deleted User")
        if self.chosen_user != "":
            dialog = Gtk.MessageDialog(
                transient_for=self,
                flags=0,
                message_type=Gtk.MessageType.QUESTION,
                buttons=Gtk.ButtonsType.YES_NO,
                text="Confirmation of Deletion Action",
            )
            dialog.format_secondary_text(
                "Are you sure of the data Selected?\nUsers CAN NOT be recovered after being deleted."
            )
            response = dialog.run()
            if response == Gtk.ResponseType.YES:
                print("clicked YES button")
            elif response == Gtk.ResponseType.NO:
                print("clicked NO button")

            dialog.destroy()
        else:
            dialog = Gtk.MessageDialog(
                transient_for=self,
                flags=0,
                message_type=Gtk.MessageType.ERROR,
                buttons=Gtk.ButtonsType.CANCEL,
                text="Error at Deleting!",
            )
            dialog.format_secondary_text(
                "Select a User to Delete it."
            )
            dialog.run()

            dialog.destroy()

    def on_close_clicked(self, button):
        print("Change screen to Sign In")
        self.close()
        import login
        win = login.WindowOne()
        win.connect("destroy", Gtk.main_quit)
        win.show_all()
        win.show()
        Gtk.main()
