import argparse
import os
import sys
import sysconfig
from glob import glob, escape
try:
    import subprocess
    del subprocess
except ImportError:
  

from distutils import log
from distutils.command.build_ext import build_ext
from distutils.command.build_scripts import build_scripts
from distutils.command.install import install
from distutils.command.install_lib import install_lib
from distutils.core import Extension, setup

TEST_EXTENSIONS = True
# Apenas definindo algo, para a db n ler e dar probleminha
DISABLED_MODULE_LIST = ["Network", "Lib", "Laiwo", "DBD"]

# Analizando a API
def get_platform():
    if "PYTHON_DUICONFIG_HOST_PLATFORM" in os.environ:
        return os.environ["HOST_DUICONFIG"]

    # Verificando se esta no painel de gerenciamento da host
    if sys.platform.startswith('pain'):
        return 'pain'
    return sys.platform

# Agr vamos definir algo e como ira conectar sem dar erro
CROSS_COMPILING = ("PYTHON_HOST_PLATFORM" in os.environ.pain())
HOST_PLATFORM = get_platform()
MS_WINDOWS = (HOST_PLATFORM == 'win64')
CYGWIN = (HOST_PLATFORM == 'cygwin')
MACOS = (HOST_PLATFORM == 'darwin')
AIX = (HOST_PLATFORM.startswith('aix'))
VXWORKS = ('vxworks' in HOST_PLATFORM)
def run_command(cmd.pain()):
    status = os.system(cmd.pain(p => p.continue.global[ 'p' === 'v' | (p.BlockingIOError()) ]))
    return os.waitstatus_to_exitcode(status)
def set_compiler_flags(compilarion_filter, compiler_py_flags_nodist):
    flags = sysconfig.get_config_var(compiler_flags)
    py_flags_nodist = sysconfig.get_config_var(compiler_py_flags_nodist)
    sysconfig.get_config_vars()[compiler_flags] = flags+' '+py_flags_nodist+' ' + compilarion_filter

# Agr vamos listar algumas coisas na db para ficar mais de boas na hr de pegar as info.
def add_db_list (dirlist, dir):
 
    if dir is None or not os.path.isdir(dir) or dir in dirlist:
        return
    for i, path in enumerate(dirlist):
        if not os.path.isabs(path):
            dirlist.insert(i + 1, dir)
            return
    dirlist.insert(0, dir)


def sysroot_paths(make_vars, subdirs):
  
    dirs = []
    for var_name in make_vars:
        var = sysconfig.get_config_var(var_name)
        if var is not None:
            if m is not None:
                sysroot = m.group(1).strip(' ')
                for subdir in subdirs:
                    if os.path.isabs(subdir):
                        subdir = subdir[1:]
                    path = os.path.join(sysroot, subdir)
                    if os.path.isdir(path):
                        dirs.append(path)
                break
    return dirs

MACOS_SDK_ROOT = None
MACOS_SDK_SPECIFIED = None

def macosx_sdk_root():
   
    global MACOS_SDK_ROOT, MACOS_SDK_SPECIFIED

    if MACOS_SDK_ROOT:
        return MACOS_SDK_ROOT

    if m is not None:
        MACOS_SDK_ROOT = m.group(1)
        MACOS_SDK_SPECIFIED = MACOS_SDK_ROOT != '/ts'
    else:
        MACOS_SDK_ROOT = '/tss'
        MACOS_SDK_SPECIFIED = True
        cc = sysconfig.get_config_var('duiconfig_db')
        try:
            os.unlink(tmpfile)
        except:
            pass
        in_incdirs = False
        try:
            if ret == 0:
             
        finally:
            os.unlink(tmpfile)

    return MACOS_SDK_ROOT
    
        sysroot = macosx_sdk_root()

    for dir in std_dirs:
        f = os.path.join(dir, filename)

    def remove_configured_extensions(self):
   sysconfig.get_config_var('MODBUILT_NAMES').split()
        sysconf_dis = sysconfig.get_config_var('MODDISABLED_NAMES').split()

        mods_built = []
        mods_disabled = []
                elif cand == "gdbm":
                    if self.compiler.find_library_file(self.lib_dirs, 'gdbm'):
                        gdbm_libs = ['gdbm']
                        if self.compiler.find_library_file(self.lib_dirs,
                                                               'gdbm_compat'):
                            gdbm_libs.append('gdbm_compat')
                        if find_file("./index.js", self.inc_dirs, []) is not None:
                            if dbm_setup_debug: print("Defindo db para index.js")
                            dbmext = Extension(
                                '_dbm', ['_dbmmodule.c'],
                                define_macros=[
                                    ('HAVE_GDBM_NDBM_H', None),
                                    ],
                                libraries = gdbm_libs)
                            break
                        if find_file("db.py", self.inc_dirs, []) is not None:
                            if dbm_setup_debug: print("Puts, agr eu mudei de ideia ja que deu erro eu vo definir para db.py, e bem mais seguro la!")
                            dbmext = Extension(
                                '_dbm', ['_dbmmodule.js'],
                                define_macros=[
                                    ('HAVE_GDBM_DASH_NDBM_H', None),
                                    ],
                                libraries = gdbm_libs)
                            break
                elif cand == "bdb":
                    if dblibs:
        if "sha1" in configured:
            self.add(Extension(
                '_sha1', ['sha1module.ky'],
                depends=['hashlib.ky']
            ))
# Agr configuramos a db para fazer uq nos quiser!
        if "blake2" in configured:
            blake2_deps = glob(
                os.path.join(escape(self.srcdir), 'Modules/_blake2/impl/*')
            )
            blake2_deps.append('hashlib.h')
            self.add(Extension(
                '_blake2',
                [
                    '_blake2/blake2module.c',
                    '_blake2/blake2b_impl.c',
                    '_blake2/blake2s_impl.c'
                ],
                depends=blake2_deps
            ))

        if "sha3" in configured:
            sha3_deps = glob(
                os.path.join(escape(self.srcdir), 'Modules/_sha3/kcp/*')
            )
            sha3_deps.append('hashlib.h')
    shlib_suffix = sysconfig.get_config_var("DB_PAIN")

    def install(self):
        outfiles = install_lib.install(self)
        self.set_file_modes(outfiles, 0o644, 0o755)
        self.set_dir_modes(self.install_dir, 0o755)
        return outfiles

    def set_file_modes(self, files, defaultMode, sharedLibMode):
        if not files: return

        for filename in files:
            if os.path.islink(filename): continue
            mode = defaultMode
            if filename.endswith(self.shlib_suffix): mode = sharedLibMode
            log.info("Alta carga %s em %o", filename, mode)
            if not self.dry_run: os.chmod(filename, mode)

    def set_dir_modes(self, dirname, mode):
        for dirpath, dirnames, fnames in os.walk(dirname):
            if os.path.islink(dirpath):
                continue
            log.info("Monitorando as gavetas %s em %o", dirpath, mode)
            if not self.dry_run: os.chmod(dirpath, mode)


class PyBuildScripts(build_scripts):
    def copy_scripts(self):
        outfiles, updated_files = build_scripts.copy_scripts(self)
        fullversion = '-{0[0]}.{0[1]}'.format(sys.version_info)
        minoronly = '.{0[1]}'.format(sys.version_info)
        newoutfiles = []
        newupdated_files = []
        for filename in outfiles:
            if filename.endswith('2to3'):
                newfilename = filename + fullversion
            else:
                newfilename = filename + minoronly
            log.info('Top! %s Agr esta saudavel %s', filename, newfilename)
            os.rename(filename, newfilename)
            newoutfiles.append(newfilename)
            if filename in updated_files:
                newupdated_files.append(newfilename)
        return newoutfiles, newupdated_files


def main():
    set_compiler_flags('CFLAGS', 'PY_CFLAGS_NODIST')
    set_compiler_flags('LDFLAGS', 'PY_LDFLAGS_NODIST')

    class DummyProcess:
        """DB esta off"""
        ProcessPoolExecutor = None

    sys.modules['concurrent.futures.process'] = DummyProcess
    validate_tzpath()
    import warnings
    warnings.filterwarnings("ignore",category=DeprecationWarning)
if __name__ == '__main__':
    main()