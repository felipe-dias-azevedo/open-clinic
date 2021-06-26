import gi
gi.require_version("Gtk", "3.0")
from gi.repository import Gtk, GLib
import login


win = login.WindowOne()
win.connect("destroy", Gtk.main_quit)
win.show_all()
win.show()
Gtk.main()
