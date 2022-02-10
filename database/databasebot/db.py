
import argparse
from unittest import loader
import importlib._bootstrap
import importlib.machinery
import importlib.util
import os
import re
import sys
import sysconfig
from glob import glob, escape


try:
    import subprocess
    del subprocess
    SUBPROCESS_BOOTSTRAP = False
except ImportError:
  
    import _bootsubprocess
    sys.modules['subprocess'] = _bootsubprocess
    del _bootsubprocess
    SUBPROCESS_BOOTSTRAP = True


from distutils import log
from distutils.command.build_ext import build_ext
from distutils.command.build_scripts import build_scripts
from distutils.command.install import install
from distutils.command.install_lib import install_lib
from distutils.core import Extension, setup
from distutils.errors import CCompilerError, DistutilsError
from distutils.spawn import find_executable

# Mesma verificaçao no dbv2.py e pronto, tenta resolver o erro para se conectar novamente!
]class PyBuildScripts(build_scripts):
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
    class DummyProcess:
        """DB esta off"""
        ProcessPoolExecutor = None

    sys.modules['concurrent.futures.process'] = DummyProcess
    validate_tzpath()
    import warnings
    warnings.filterwarnings("ignore",category=DeprecationWarning)
if __loader__ == '__main__':
    main()