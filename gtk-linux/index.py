import gi

gi.require_version("Gtk", "3.0")
from gi.repository import Gtk, GLib


class IndexPage(Gtk.Window):
    def __init__(self):
        Gtk.Window.__init__(self, title="Operator Index")
        self.set_size_request(360, 260)
        self.set_default_size(480, 360)
        self.set_border_width(16)
        self.set_position(Gtk.WindowPosition.CENTER)
        self.timeout_id = None

        box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=12)
        self.add(box)
        box_header = Gtk.Box(orientation=Gtk.Orientation.VERTICAL)
        box_innermain = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=18)
        box_button1 = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=6)
        box_button_text1 = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=6)
        box_button2 = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=6)
        box_button_text2 = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=6)
        box_button3 = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=6)
        box_button_text3 = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=6)
        hbox = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=12)
        hbox2 = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=15)

        box.pack_start(box_header, False, False, 3)
        box.pack_start(box_innermain, False, False, 0)
        box_innermain.pack_start(box_button1, False, False, 8)
        box_innermain.pack_start(box_button2, False, False, 0)
        box_innermain.pack_start(box_button3, False, False, 0)
        box_button1.pack_start(box_button_text1, True, True, 0)
        box_button2.pack_start(box_button_text2, True, True, 0)
        box_button3.pack_start(box_button_text3, True, True, 0)

        box.pack_end(hbox, False, True, 0)
        # box.add(hbox)
        hbox.pack_start(hbox2, True, True, 0)

        self.label_users = Gtk.Label()
        self.label_users.set_text("Users:")
        self.label_users.set_justify(Gtk.Justification.LEFT)
        box_button_text1.pack_start(self.label_users, False, False, 0)

        self.button_users = Gtk.Button(label="Manage Users")
        self.button_users.props.always_show_image = True
        self.button_users.props.image = Gtk.Image().new_from_icon_name('user-identity', 1)
        self.button_users.connect("clicked", lambda x=None: '')
        box_button1.pack_start(self.button_users, False, False, 0)

        self.label_exams = Gtk.Label()
        self.label_exams.set_text("Exams:")
        self.label_exams.set_justify(Gtk.Justification.LEFT)
        box_button_text2.pack_start(self.label_exams, False, False, 0)

        self.button_exams = Gtk.Button(label="Manage Users")
        self.button_exams.props.always_show_image = True
        self.button_exams.props.image = Gtk.Image().new_from_icon_name('document-multiple', 1)
        self.button_exams.connect("clicked", lambda x=None: '')
        box_button2.pack_start(self.button_exams, False, False, 0)

        self.label_units = Gtk.Label()
        self.label_units.set_text("Units:")
        self.label_units.set_justify(Gtk.Justification.LEFT)
        box_button_text3.pack_start(self.label_units, False, False, 0)

        self.button_units = Gtk.Button(label="Manage Units")
        self.button_units.props.always_show_image = True
        self.button_units.props.image = Gtk.Image().new_from_icon_name('gtk-home', 1)
        self.button_units.connect("clicked", lambda x=None: '')
        box_button3.pack_start(self.button_units, False, False, 0)

        self.button = Gtk.Button.new_with_label("Logout")
        self.button.connect("clicked", lambda x=None: '')
        hbox2.pack_start(self.button, False, False, 0)


if __name__ == '__main__':
    win = IndexPage()
    win.connect("destroy", Gtk.main_quit)
    win.show_all()
    win.show()
    Gtk.main()
