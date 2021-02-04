import gi

gi.require_version("Gtk", "3.0")
from gi.repository import Gtk, GLib


class WindowOne(Gtk.Window):
    def __init__(self):
        Gtk.Window.__init__(self, title="Account Log In")
        self.set_size_request(360, 260)
        self.set_default_size(480, 360)
        self.set_border_width(16)
        self.set_position(Gtk.WindowPosition.CENTER)
        self.timeout_id = None

        box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=12)
        self.add(box)
        box_header = Gtk.Box(orientation=Gtk.Orientation.VERTICAL)
        box_innermain = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=18)
        box_input1 = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=6)
        box_input_text1 = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=6)
        box_input2 = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=6)
        box_input_text2 = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=6)
        hbox = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=12)
        hbox2 = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=15)

        box.pack_start(box_header, False, False, 3)
        box.pack_start(box_innermain, False, False, 0)
        box_innermain.pack_start(box_input1, False, False, 8)
        box_innermain.pack_start(box_input2, False, False, 0)
        box_input1.pack_start(box_input_text1, True, True, 0)
        box_input2.pack_start(box_input_text2, True, True, 0)

        box.pack_end(hbox, False, True, 0)
        # box.add(hbox)
        hbox.pack_start(hbox2, True, True, 0)

        self.label_username = Gtk.Label()
        self.label_username.set_text("Username:")
        self.label_username.set_justify(Gtk.Justification.LEFT)
        box_input_text1.pack_start(self.label_username, False, False, 0)

        self.entry_username = Gtk.Entry()
        self.entry_username.set_max_length(50)
        self.entry_username.set_text("")
        box_input1.pack_start(self.entry_username, False, False, 0)

        self.label_password = Gtk.Label()
        self.label_password.set_text("Password:")
        self.label_password.set_justify(Gtk.Justification.LEFT)
        box_input_text2.pack_start(self.label_password, False, False, 0)

        self.entry_password = Gtk.Entry()
        self.entry_password.set_visibility(False)
        self.entry_password.set_max_length(50)
        self.entry_password.set_text("")
        box_input2.pack_start(self.entry_password, False, False, 0)

        self.button_close = Gtk.Button(label="Cancel")
        self.button_close.connect("clicked", self.on_close_clicked)
        hbox2.pack_start(self.button_close, False, False, 0)

        self.button = Gtk.Button.new_with_label("Confirm")
        self.button.connect("clicked", self.on_confirm)
        hbox2.pack_end(self.button, False, False, 0)

    def on_close_clicked(self, button):
        print("Application Closed")
        Gtk.main_quit()

    def on_confirm(self, button):
        user_exists = True
        if user_exists:
            print("Change screen to View Users")
            self.close()
            import viewusers
            win = viewusers.ViewUsers()
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
                text="Log In Failed!",
            )
            dialog.format_secondary_text(
                "Data informed is incorrect."
            )
            dialog.run()

            dialog.destroy()
