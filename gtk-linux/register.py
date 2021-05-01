import gi

gi.require_version("Gtk", "3.0")
from gi.repository import Gtk, GLib


class Register(Gtk.Window):
    def __init__(self, updateUser, userFirstname="", userLastname="", userID=0):
        Gtk.Window.__init__(self, title="User Registration")
        self.set_size_request(360, 240)
        self.set_default_size(480, 360)
        self.set_border_width(16)
        self.set_position(Gtk.WindowPosition.CENTER)
        self.timeout_id = None

        self.update_user = updateUser  # if PUT method, update user at DB
        self.user_firstname = userFirstname
        self.user_lastname = userLastname
        self.user_name = self.user_firstname + " " + self.user_lastname  # complete name of user
        self.user_id = userID  # user database ID

        self.name_entry_text = False
        self.lastname_entry_text = False
        self.progress_bar_percent = 0

        box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=12)
        self.add(box)
        box_name = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=2)
        box_name.set_homogeneous(True)
        box_name_text = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=2)
        box_lastname = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=2)
        box_lastname.set_homogeneous(True)
        box_lastname_text = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=2)
        box_progress = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=2)
        box_progress.set_homogeneous(True)
        hbox = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=12)
        hbox2 = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=15)

        if self.update_user:
            box_title = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=15)

            self.label_title = Gtk.Label()
            label_text = "Updating User: " + str(self.user_name) + " (ID: " + str(self.user_id) + ")"
            self.label_title.set_text(label_text)
            self.label_title.set_justify(Gtk.Justification.LEFT)

            box.pack_start(box_title, False, True, 0)
            box_title.pack_start(self.label_title, False, False, 0)

        box.add(box_name)
        box.add(box_lastname)
        box.add(box_progress)
        box.pack_end(hbox, False, True, 0)
        box_name.pack_start(box_name_text, True, True, 0)
        box_lastname.pack_start(box_lastname_text, True, True, 0)
        hbox.pack_start(hbox2, True, True, 0)


        self.label_name = Gtk.Label()
        self.label_name.set_text("First Name:")
        self.label_name.set_justify(Gtk.Justification.LEFT)
        box_name_text.pack_start(self.label_name, False, False, 0)

        self.entry_name = Gtk.Entry()
        self.entry_name.set_max_length(50)
        if self.update_user:
            self.entry_name.set_text(self.user_firstname)
        else:
            self.entry_name.set_text("")
            self.entry_name.connect("changed", self.on_entry_name_changed)
        box_name.add(self.entry_name)

        self.label_lastname = Gtk.Label()
        self.label_lastname.set_text("Last Name:")
        self.label_lastname.set_justify(Gtk.Justification.LEFT)
        box_lastname_text.pack_start(self.label_lastname, False, False, 0)

        self.entry_lastname = Gtk.Entry()
        self.entry_lastname.set_max_length(50)
        if self.update_user:
            self.entry_lastname.set_text(self.user_lastname)
        else:
            self.entry_lastname.set_text("")
            self.entry_lastname.connect("changed", self.on_entry_lastname_changed)
        box_lastname.add(self.entry_lastname)

        if not self.update_user:
            self.progressbar = Gtk.ProgressBar()
            self.progressbar.set_text("Register Progress Completed: 0.0%")
            self.progressbar.set_show_text(True)
            box_progress.pack_start(self.progressbar, True, True, 14)


        self.button_close = Gtk.Button(label="Cancel")
        self.button_close.connect("clicked", self.on_close_clicked)
        hbox2.pack_start(self.button_close, False, False, 0)

        self.dialog = Gtk.Button(label="Confirm")
        self.dialog.connect("clicked", self.on_confirm)
        hbox2.pack_end(self.dialog, False, False, 0)

        if self.update_user:
            self.button = Gtk.Button.new_with_label("Reset Data")
            self.button.connect("clicked", self.on_reset)
            hbox2.pack_end(self.button, False, False, 0)

    def update_progressbar_percent(self):
        self.progressbar.set_fraction(self.progress_bar_percent)
        self.progressbar.set_text("Register Progress Completed: " + str(self.progress_bar_percent * 100) + "%")

    def on_entry_name_changed(self, entry):
        if len(entry.get_text()) >= 2 and not self.name_entry_text:
            self.name_entry_text = True
            self.progress_bar_percent += 0.5
            self.update_progressbar_percent()
        elif len(entry.get_text()) < 2:
            self.name_entry_text = False
            self.progress_bar_percent -= 0.5
            self.update_progressbar_percent()

    def on_entry_lastname_changed(self, entry):
        if len(entry.get_text()) >= 2 and not self.lastname_entry_text:
            self.lastname_entry_text = True
            self.progress_bar_percent += 0.5
            self.update_progressbar_percent()
        elif len(entry.get_text()) < 2:
            self.lastname_entry_text = False
            self.progress_bar_percent -= 0.5
            self.update_progressbar_percent()

    def on_close_clicked(self, button):
        print("Change screen to View Users")
        self.close()
        import viewusers
        win = viewusers.ViewUsers()
        win.connect("destroy", Gtk.main_quit)
        win.show_all()
        win.show()
        Gtk.main()

    def on_reset(self, button):
        print('Reset Data')
        self.entry_name.set_text(self.user_firstname)
        self.entry_lastname.set_text(self.user_lastname)

    def on_confirm(self, widget):
        text_firstname = self.entry_name.get_text()
        text_lastname = self.entry_lastname.get_text()
        if len(text_firstname) < 3 or len(text_lastname) < 3:
            dialog = Gtk.MessageDialog(
                transient_for=self,
                flags=0,
                message_type=Gtk.MessageType.ERROR,
                buttons=Gtk.ButtonsType.CANCEL,
                text="Error at Updating/Inserting!",
            )
            dialog.format_secondary_text(
                "Fill all Entries to Update/Insert the User."
            )
            dialog.run()

            dialog.destroy()
        else:
            dialog = Gtk.MessageDialog(
                transient_for=self,
                flags=0,
                message_type=Gtk.MessageType.QUESTION,
                buttons=Gtk.ButtonsType.YES_NO,
                text="Confirmation of Data Inserted",
            )
            dialog.format_secondary_text(
                "Are you sure of the data inserted?\nUsers created can be deleted later."
            )
            response = dialog.run()
            if response == Gtk.ResponseType.YES:
                print("clicked YES button")
            elif response == Gtk.ResponseType.NO:
                print("clicked NO button")

            dialog.destroy()
